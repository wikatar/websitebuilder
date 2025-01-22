"""
Tests for the Schema.org markup generator.
"""

import unittest
from bot_core.seo.schema_generator import SchemaGenerator

class TestSchemaGenerator(unittest.TestCase):
    def setUp(self):
        self.generator = SchemaGenerator()
        self.test_business = {
            "name": "Test Business",
            "address": {
                "street": "123 Test St",
                "city": "Test City",
                "region": "Test Region",
                "postal_code": "12345",
                "country": "Test Country"
            },
            "geo": {
                "latitude": 12.345,
                "longitude": -12.345
            },
            "telephone": "+1-234-567-8900"
        }

    def test_local_business_schema(self):
        schema = self.generator.generate_local_business(
            business_name=self.test_business["name"],
            address=self.test_business["address"],
            geo=self.test_business["geo"],
            telephone=self.test_business["telephone"]
        )
        
        self.assertEqual(schema["@context"], "https://schema.org")
        self.assertEqual(schema["@type"], "LocalBusiness")
        self.assertEqual(schema["name"], self.test_business["name"])
        self.assertEqual(schema["telephone"], self.test_business["telephone"])

    def test_service_schema(self):
        schema = self.generator.generate_service(
            name="Test Service",
            description="A test service description",
            provider="Test Provider",
            price="99.99",
            currency="USD"
        )

        self.assertEqual(schema["@type"], "Service")
        self.assertEqual(schema["name"], "Test Service")
        self.assertTrue("offers" in schema)
        self.assertEqual(schema["offers"]["price"], "99.99")

    def test_faq_schema(self):
        questions = [
            {
                "question": "Test Question 1?",
                "answer": "Test Answer 1"
            },
            {
                "question": "Test Question 2?",
                "answer": "Test Answer 2"
            }
        ]
        schema = self.generator.generate_faq(questions)

        self.assertEqual(schema["@type"], "FAQPage")
        self.assertEqual(len(schema["mainEntity"]), 2)
        self.assertEqual(schema["mainEntity"][0]["name"], "Test Question 1?")

    def test_review_aggregate_schema(self):
        schema = self.generator.generate_review_aggregate(
            item_name="Test Business",
            rating_value=4.5,
            review_count=100
        )

        self.assertEqual(schema["@type"], "LocalBusiness")
        self.assertTrue("aggregateRating" in schema)
        self.assertEqual(schema["aggregateRating"]["ratingValue"], 4.5)
        self.assertEqual(schema["aggregateRating"]["reviewCount"], 100)

    def test_schema_validation(self):
        valid_schema = self.generator.generate_local_business(
            business_name=self.test_business["name"],
            address=self.test_business["address"],
            geo=self.test_business["geo"],
            telephone=self.test_business["telephone"]
        )
        self.assertTrue(self.generator.validate_schema(valid_schema))

        invalid_schema = {"@type": "LocalBusiness", "name": "Test"}
        self.assertFalse(self.generator.validate_schema(invalid_schema))

if __name__ == '__main__':
    unittest.main() 