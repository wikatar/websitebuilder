"""
SEO Sentinel: Automated monitoring and governance system for SEO operations.
Handles automated checks, remediation, and human escalation when needed.
"""

from datetime import datetime, timedelta
from typing import Dict, List, Optional
import json
import logging

class SEOSentinel:
    def __init__(self, config_path: str = "config/seo_thresholds.json"):
        self.thresholds = {
            'traffic_drop': -15,  # Alert if >15% drop
            'ctr': {'min': 2.5, 'max': 8},
            'reviews': {'response_time': 4},  # hours
            'content': {
                'freshness': 90,  # days
                'min_length': 1200,  # words
                'keyword_density': {'min': 0.8, 'max': 1.2}
            }
        }
        self.load_config(config_path)
        self.setup_logging()

    def load_config(self, config_path: str) -> None:
        """Load custom thresholds from config file"""
        try:
            with open(config_path) as f:
                custom_thresholds = json.load(f)
                self.thresholds.update(custom_thresholds)
        except FileNotFoundError:
            logging.warning(f"Config file not found at {config_path}, using defaults")

    def setup_logging(self) -> None:
        """Configure logging for the sentinel"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            filename='logs/seo_sentinel.log'
        )
        self.logger = logging.getLogger('SEOSentinel')

    def analyze_and_act(self, site_data: Dict) -> Dict:
        """Main oversight method that analyzes metrics and takes action"""
        self.logger.info("Starting SEO analysis")
        
        issues = self._collect_metrics(site_data)
        
        if self._needs_human(issues):
            ticket_id = self._create_ticket(issues)
            self.logger.info(f"Created ticket {ticket_id} for human review")
            return {"status": "escalated", "ticket": ticket_id, "issues": issues}
        else:
            self._auto_remediate(issues)
            return {"status": "auto_fixed", "issues": issues}

    def _collect_metrics(self, site_data: Dict) -> Dict:
        """Collect and analyze all SEO metrics"""
        issues = {}
        
        # Traffic analysis
        if self._check_traffic_drop(site_data.get('traffic', {})):
            issues['traffic'] = 'significant_drop'
            
        # CTR analysis
        ctr_issues = self._analyze_ctr(site_data.get('search_console', {}))
        if ctr_issues:
            issues['ctr'] = ctr_issues
            
        # Review management
        review_issues = self._check_reviews(site_data.get('reviews', {}))
        if review_issues:
            issues['reviews'] = review_issues
            
        # Content freshness
        content_issues = self._analyze_content(site_data.get('content', {}))
        if content_issues:
            issues['content'] = content_issues
            
        return issues

    def _check_traffic_drop(self, traffic_data: Dict) -> bool:
        """Check for significant traffic drops"""
        if not traffic_data:
            return False
            
        current = traffic_data.get('current', 0)
        previous = traffic_data.get('previous', 0)
        
        if previous == 0:
            return False
            
        change_percent = ((current - previous) / previous) * 100
        return change_percent <= self.thresholds['traffic_drop']

    def _analyze_ctr(self, search_data: Dict) -> List[str]:
        """Analyze Click-Through Rate issues"""
        issues = []
        
        for page in search_data.get('pages', []):
            ctr = page.get('ctr', 0)
            if ctr < self.thresholds['ctr']['min']:
                issues.append(f"Low CTR on {page['url']}: {ctr}%")
            elif ctr > self.thresholds['ctr']['max']:
                issues.append(f"Suspicious CTR on {page['url']}: {ctr}%")
                
        return issues

    def _check_reviews(self, review_data: Dict) -> List[str]:
        """Check for review management issues"""
        issues = []
        
        for review in review_data.get('recent', []):
            if not review.get('response'):
                time_diff = datetime.now() - datetime.fromisoformat(review['date'])
                if time_diff.total_seconds() / 3600 > self.thresholds['reviews']['response_time']:
                    issues.append(f"Unresponded review from {review['date']}")
                    
        return issues

    def _analyze_content(self, content_data: Dict) -> List[str]:
        """Analyze content for SEO issues"""
        issues = []
        
        for page in content_data.get('pages', []):
            # Check content freshness
            last_updated = datetime.fromisoformat(page.get('last_updated', '2000-01-01'))
            if (datetime.now() - last_updated).days > self.thresholds['content']['freshness']:
                issues.append(f"Stale content on {page['url']}")
                
            # Check content length
            if page.get('word_count', 0) < self.thresholds['content']['min_length']:
                issues.append(f"Thin content on {page['url']}")
                
            # Check keyword density
            density = page.get('keyword_density', 0)
            if density < self.thresholds['content']['keyword_density']['min']:
                issues.append(f"Low keyword density on {page['url']}")
            elif density > self.thresholds['content']['keyword_density']['max']:
                issues.append(f"High keyword density on {page['url']}")
                
        return issues

    def _needs_human(self, issues: Dict) -> bool:
        """Determine if human intervention is needed"""
        critical_issues = {
            'traffic': True,  # Traffic drops always need human review
            'reviews': len(issues.get('reviews', [])) > 3,  # Multiple review issues
            'content': len(issues.get('content', [])) > 5  # Multiple content issues
        }
        
        return any(critical_issues.values())

    def _create_ticket(self, issues: Dict) -> str:
        """Create a ticket for human review"""
        # Implement your ticketing system integration here
        ticket_data = {
            'title': 'SEO Issues Requiring Review',
            'description': json.dumps(issues, indent=2),
            'priority': 'high' if issues.get('traffic') else 'medium'
        }
        
        # For now, just log it
        self.logger.info(f"Would create ticket: {ticket_data}")
        return f"TICKET-{datetime.now().strftime('%Y%m%d%H%M')}"

    def _auto_remediate(self, issues: Dict) -> None:
        """Automatically fix issues where possible"""
        if issues.get('content'):
            self._schedule_content_updates(issues['content'])
            
        if issues.get('reviews'):
            self._auto_respond_reviews(issues['reviews'])

    def _schedule_content_updates(self, content_issues: List[str]) -> None:
        """Schedule content updates for stale or thin content"""
        for issue in content_issues:
            self.logger.info(f"Scheduling content update for: {issue}")
            # Implement your content update scheduling here

    def _auto_respond_reviews(self, review_issues: List[str]) -> None:
        """Automatically respond to reviews"""
        for issue in review_issues:
            self.logger.info(f"Auto-responding to review: {issue}")
            # Implement your review response system here 