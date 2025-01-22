"""
SEO Module: Comprehensive SEO automation and management system.
Provides tools for monitoring, optimization, and review management.
"""

from .automation import SEOAutomation
from .sentinel import SEOSentinel
from .cost_governor import SEOCostGovernor
from .review_manager import ReviewManager

__version__ = "0.1.0"

__all__ = [
    'SEOAutomation',
    'SEOSentinel',
    'SEOCostGovernor',
    'ReviewManager'
]

# Example usage:
"""
# Initialize SEO automation
seo = SEOAutomation(
    business_id="123",
    monthly_budget=5000
)

# Run automated tasks
results = seo.run_automated_tasks()

# Handle results
if results['pending_actions']:
    for action in results['pending_actions']:
        if action['type'] == 'review_escalation':
            # Handle review escalation
            pass
        elif action['type'] == 'seo_issue':
            # Handle SEO issue
            pass

# Check budget status
if results['cost_optimization']:
    # Handle cost optimization suggestions
    pass
""" 