"""
Review Manager: Handles automated review responses and management.
Includes AI-powered response generation and review request scheduling.
"""

from typing import Dict, List, Optional
import json
import logging
from datetime import datetime, timedelta

class ReviewManager:
    def __init__(self, business_id: str, config_path: str = "config/review_templates.json"):
        self.business_id = business_id
        self.templates = self._load_templates(config_path)
        self.setup_logging()
        
        # Default response delays
        self.response_delays = {
            'positive': 12,     # hours
            'neutral': 8,       # hours
            'negative': 4       # hours
        }
        
        # Review request triggers
        self.request_triggers = {
            'purchase': 7,      # days after purchase
            'appointment': 3,   # days after appointment
            'service': 2,       # days after service completion
            'download': 1       # days after content download
        }

    def setup_logging(self) -> None:
        """Configure logging for review management"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            filename='logs/review_manager.log'
        )
        self.logger = logging.getLogger('ReviewManager')

    def _load_templates(self, config_path: str) -> Dict:
        """Load response templates from config"""
        try:
            with open(config_path) as f:
                return json.load(f)
        except FileNotFoundError:
            self.logger.warning(f"Template file not found at {config_path}, using defaults")
            return {
                'positive': "Thank you for your {rating}-star review, {name}! We're glad you enjoyed {highlight}.",
                'neutral': "Thank you for your feedback, {name}. We appreciate your comments about {highlight} and will consider your suggestions.",
                'negative': "We're sorry to hear about your experience, {name}. Please contact us at {contact} so we can make this right."
            }

    def handle_new_review(self, review: Dict) -> Dict:
        """Process a new review and generate response"""
        self.logger.info(f"Processing new review from {review.get('author', 'Anonymous')}")
        
        # Analyze sentiment and content
        analysis = self._analyze_review(review)
        
        # Generate response
        response = self._generate_response(review, analysis)
        
        # Schedule response
        delay = self._get_response_delay(analysis['sentiment'])
        scheduled_time = datetime.now() + timedelta(hours=delay)
        
        return {
            'response': response,
            'schedule_time': scheduled_time.isoformat(),
            'analysis': analysis
        }

    def _analyze_review(self, review: Dict) -> Dict:
        """Analyze review content and sentiment"""
        # Extract key aspects
        rating = review.get('rating', 3)
        text = review.get('text', '')
        
        # Determine sentiment
        if rating >= 4:
            sentiment = 'positive'
        elif rating >= 3:
            sentiment = 'neutral'
        else:
            sentiment = 'negative'
            
        # Extract highlights or issues
        highlights = self._extract_key_points(text)
        
        return {
            'sentiment': sentiment,
            'highlights': highlights,
            'rating': rating,
            'length': len(text),
            'needs_escalation': self._needs_escalation(rating, text)
        }

    def _extract_key_points(self, text: str) -> List[str]:
        """Extract key points from review text"""
        # Implement more sophisticated extraction logic here
        # For now, just split on common delimiters
        points = []
        for sentence in text.split('.'):
            if any(keyword in sentence.lower() for keyword in ['great', 'good', 'bad', 'love', 'hate']):
                points.append(sentence.strip())
        return points

    def _needs_escalation(self, rating: int, text: str) -> bool:
        """Determine if review needs human attention"""
        # Criteria for escalation
        return any([
            rating == 1,  # All 1-star reviews
            'legal' in text.lower(),  # Legal threats
            'manager' in text.lower(),  # Requests for management
            'refund' in text.lower(),  # Refund requests
            len(text) > 500  # Long detailed complaints
        ])

    def _generate_response(self, review: Dict, analysis: Dict) -> str:
        """Generate appropriate response using templates"""
        template = self.templates[analysis['sentiment']]
        
        # Get highlight or issue to mention
        highlight = analysis['highlights'][0] if analysis['highlights'] else "our service"
        
        # Format response
        response = template.format(
            name=review.get('author', 'valued customer'),
            rating=review.get('rating', ''),
            highlight=highlight,
            contact=self._get_support_contact(analysis['sentiment'])
        )
        
        return response

    def _get_response_delay(self, sentiment: str) -> int:
        """Get appropriate delay before posting response"""
        return self.response_delays.get(sentiment, 12)

    def _get_support_contact(self, sentiment: str) -> str:
        """Get appropriate contact information based on sentiment"""
        if sentiment == 'negative':
            return "support@example.com"  # Priority support
        return "contact@example.com"      # Regular contact

    def schedule_review_request(self, event_type: str, customer_data: Dict) -> Optional[Dict]:
        """Schedule a review request based on event type"""
        if event_type not in self.request_triggers:
            self.logger.warning(f"Unknown event type: {event_type}")
            return None
            
        delay_days = self.request_triggers[event_type]
        scheduled_time = datetime.now() + timedelta(days=delay_days)
        
        request = {
            'customer': customer_data,
            'event_type': event_type,
            'scheduled_time': scheduled_time.isoformat(),
            'template': 'review_request',
            'channel': self._get_preferred_channel(customer_data)
        }
        
        self.logger.info(f"Scheduled review request for {customer_data.get('email')} on {scheduled_time}")
        return request

    def _get_preferred_channel(self, customer_data: Dict) -> str:
        """Determine best channel for review request"""
        if customer_data.get('sms_consent'):
            return 'sms'
        elif customer_data.get('email'):
            return 'email'
        return 'app_notification'  # Fallback option 