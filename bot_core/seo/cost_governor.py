"""
SEO Cost Governor: Manages and optimizes SEO-related expenses.
Handles budget allocation, ROI tracking, and cost optimization.
"""

from typing import Dict, Optional
import json
import logging
from datetime import datetime, timedelta

class SEOCostGovernor:
    def __init__(self, monthly_budget: float = 5000):
        self.monthly_budget = monthly_budget
        self.current_month = datetime.now().strftime('%Y-%m')
        self.expenses = {self.current_month: 0.0}
        
        # Default costs for various SEO activities
        self.activity_costs = {
            'content': {
                'word': 0.02,        # Cost per word for AI content
                'image': 0.10,       # Cost per AI-generated image
                'edit': 0.05         # Cost per word for AI editing
            },
            'technical': {
                'audit': 50.0,       # Full technical audit
                'fix': 5.0           # Per-issue fix
            },
            'local_seo': {
                'gmb_post': 1.0,     # Cost per GMB post
                'citation': 2.0      # Cost per citation update
            },
            'monitoring': {
                'daily': 0.50,       # Daily monitoring cost
                'report': 5.0        # Per-report generation
            }
        }
        
        self.setup_logging()

    def setup_logging(self) -> None:
        """Configure logging for the cost governor"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            filename='logs/seo_costs.log'
        )
        self.logger = logging.getLogger('SEOCostGovernor')

    def approve_expenditure(self, task_type: str, quantity: float, 
                          expected_roi: Optional[float] = None) -> bool:
        """Approve or reject an expenditure based on budget and ROI"""
        # Calculate task cost
        cost = self._calculate_cost(task_type, quantity)
        
        # Check if we have budget
        if not self._has_budget(cost):
            self.logger.warning(f"Budget exceeded for {task_type}")
            return False
            
        # Check ROI if provided
        if expected_roi is not None:
            if not self._check_roi(cost, expected_roi):
                self.logger.warning(f"ROI too low for {task_type}")
                return False
        
        # Approve and record expense
        self._record_expense(cost)
        self.logger.info(f"Approved {task_type} expense: ${cost}")
        return True

    def _calculate_cost(self, task_type: str, quantity: float) -> float:
        """Calculate the cost for a specific task"""
        if '.' in task_type:
            category, specific = task_type.split('.')
            return self.activity_costs[category][specific] * quantity
        else:
            raise ValueError(f"Invalid task type format: {task_type}")

    def _has_budget(self, cost: float) -> bool:
        """Check if there's enough budget for the expense"""
        current_expenses = self.expenses.get(self.current_month, 0.0)
        return (current_expenses + cost) <= self.monthly_budget

    def _check_roi(self, cost: float, expected_roi: float) -> bool:
        """Verify if the ROI meets minimum requirements"""
        # Require at least 3x ROI for any investment
        return expected_roi >= (cost * 3)

    def _record_expense(self, cost: float) -> None:
        """Record an approved expense"""
        current_month = datetime.now().strftime('%Y-%m')
        
        # Reset for new month
        if current_month != self.current_month:
            self.current_month = current_month
            self.expenses[self.current_month] = 0.0
        
        # Add expense
        self.expenses[self.current_month] += cost

    def get_budget_status(self) -> Dict:
        """Get current budget status and projections"""
        current_expenses = self.expenses.get(self.current_month, 0.0)
        remaining_budget = self.monthly_budget - current_expenses
        
        # Calculate daily rate
        days_in_month = datetime.now().day
        daily_rate = current_expenses / days_in_month if days_in_month > 0 else 0
        
        # Project month-end spending
        days_in_current_month = (datetime.now().replace(day=1) + timedelta(days=32)).replace(day=1).day - 1
        projected_spend = daily_rate * days_in_current_month
        
        return {
            'current_month': self.current_month,
            'budget': self.monthly_budget,
            'spent': current_expenses,
            'remaining': remaining_budget,
            'daily_rate': daily_rate,
            'projected_spend': projected_spend,
            'status': 'on_track' if projected_spend <= self.monthly_budget else 'over_budget'
        }

    def optimize_spending(self) -> Dict[str, float]:
        """Suggest optimizations for current spending patterns"""
        status = self.get_budget_status()
        
        if status['status'] == 'over_budget':
            # Calculate necessary reductions
            excess = status['projected_spend'] - self.monthly_budget
            
            # Suggest cuts based on typical ROI
            suggestions = {
                'content.word': max(0, self.activity_costs['content']['word'] * 0.9),
                'content.image': max(0, self.activity_costs['content']['image'] * 0.8),
                'local_seo.gmb_post': max(0, self.activity_costs['local_seo']['gmb_post'] * 0.85)
            }
            
            self.logger.info(f"Suggested cost optimizations: {suggestions}")
            return suggestions
        
        return {} 