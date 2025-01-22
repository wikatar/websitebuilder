"""
Schema.org markup generator for SEO optimization.
Supports LocalBusiness, Product, Service, and FAQ schemas.
"""

import json
from typing import Dict, List, Optional
from datetime import datetime

class SchemaGenerator:
    def __init__(self):
        self.base_schema = {
            "@context": "https://schema.org"
        }
    
    def generate_local_business(
        self,
        business_name: str,
        address: Dict[str, str],
        geo: Dict[str, float],
        telephone: str,
        business_type: str = "LocalBusiness",
        opening_hours: Optional[List[str]] = None,
        image: Optional[str] = None,
        price_range: Optional[str] = None
    ) -> dict:
        """Generate LocalBusiness schema markup."""
        schema = {
            **self.base_schema,
            "@type": business_type,
            "name": business_name,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": address.get("street"),
                "addressLocality": address.get("city"),
                "addressRegion": address.get("region"),
                "postalCode": address.get("postal_code"),
                "addressCountry": address.get("country")
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": geo.get("latitude"),
                "longitude": geo.get("longitude")
            },
            "telephone": telephone
        }

        if opening_hours:
            schema["openingHoursSpecification"] = opening_hours
        if image:
            schema["image"] = image
        if price_range:
            schema["priceRange"] = price_range

        return schema

    def generate_service(
        self,
        name: str,
        description: str,
        provider: str,
        area_served: Optional[str] = None,
        price: Optional[str] = None,
        currency: str = "USD"
    ) -> dict:
        """Generate Service schema markup."""
        schema = {
            **self.base_schema,
            "@type": "Service",
            "name": name,
            "description": description,
            "provider": {
                "@type": "LocalBusiness",
                "name": provider
            }
        }

        if area_served:
            schema["areaServed"] = area_served
        if price:
            schema["offers"] = {
                "@type": "Offer",
                "price": price,
                "priceCurrency": currency
            }

        return schema

    def generate_faq(self, questions: List[Dict[str, str]]) -> dict:
        """Generate FAQ schema markup."""
        schema = {
            **self.base_schema,
            "@type": "FAQPage",
            "mainEntity": []
        }

        for question in questions:
            schema["mainEntity"].append({
                "@type": "Question",
                "name": question["question"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": question["answer"]
                }
            })

        return schema

    def generate_review_aggregate(
        self,
        item_name: str,
        rating_value: float,
        review_count: int,
        item_type: str = "LocalBusiness"
    ) -> dict:
        """Generate aggregate review schema markup."""
        return {
            **self.base_schema,
            "@type": item_type,
            "name": item_name,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rating_value,
                "reviewCount": review_count,
                "bestRating": "5",
                "worstRating": "1"
            }
        }

    def to_script_tag(self, schema: dict) -> str:
        """Convert schema dict to HTML script tag."""
        return f'<script type="application/ld+json">{json.dumps(schema, ensure_ascii=False)}</script>'

    def validate_schema(self, schema: dict) -> bool:
        """Basic schema validation."""
        required_fields = {
            "LocalBusiness": ["name", "address", "telephone"],
            "Service": ["name", "description", "provider"],
            "FAQPage": ["mainEntity"],
        }

        schema_type = schema.get("@type")
        if not schema_type or schema_type not in required_fields:
            return False

        return all(field in schema for field in required_fields[schema_type]) 