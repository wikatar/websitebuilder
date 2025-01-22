"""
Uptime monitoring system for website health checks and performance tracking.
"""

import requests
import ssl
import socket
import dns.resolver
import logging
from datetime import datetime, timedelta
from typing import Dict, List, Optional

class UptimeMonitor:
    def __init__(self, config_path: str = "config/monitoring.json"):
        self.checks = {
            'http': True,
            'https': True,
            'ssl': True,
            'dns': True
        }
        self.thresholds = {
            'response_time': 1.5,  # seconds
            'ssl_expiry_warning': 30,  # days
            'status_codes': [200, 201, 301, 302]
        }
        self.setup_logging()

    def setup_logging(self) -> None:
        """Configure logging for uptime monitoring"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            filename='logs/uptime.log'
        )
        self.logger = logging.getLogger('UptimeMonitor')

    def check_site(self, domain: str) -> Dict:
        """Run all health checks for a domain"""
        results = {
            'timestamp': datetime.now().isoformat(),
            'domain': domain,
            'checks': {}
        }

        # HTTP/HTTPS check
        if self.checks['http']:
            results['checks']['http'] = self._check_http(domain)
        if self.checks['https']:
            results['checks']['https'] = self._check_https(domain)

        # SSL certificate check
        if self.checks['ssl']:
            results['checks']['ssl'] = self._check_ssl(domain)

        # DNS check
        if self.checks['dns']:
            results['checks']['dns'] = self._check_dns(domain)

        # Overall status
        results['status'] = self._determine_status(results['checks'])
        
        self._log_results(results)
        return results

    def _check_http(self, domain: str) -> Dict:
        """Check HTTP endpoint"""
        try:
            start_time = datetime.now()
            response = requests.get(f"http://{domain}", timeout=5)
            response_time = (datetime.now() - start_time).total_seconds()

            return {
                'status': 'ok' if response.status_code in self.thresholds['status_codes'] else 'error',
                'response_time': response_time,
                'status_code': response.status_code
            }
        except requests.RequestException as e:
            return {
                'status': 'error',
                'error': str(e)
            }

    def _check_https(self, domain: str) -> Dict:
        """Check HTTPS endpoint"""
        try:
            start_time = datetime.now()
            response = requests.get(f"https://{domain}", timeout=5)
            response_time = (datetime.now() - start_time).total_seconds()

            return {
                'status': 'ok' if response.status_code in self.thresholds['status_codes'] else 'error',
                'response_time': response_time,
                'status_code': response.status_code
            }
        except requests.RequestException as e:
            return {
                'status': 'error',
                'error': str(e)
            }

    def _check_ssl(self, domain: str) -> Dict:
        """Check SSL certificate"""
        try:
            context = ssl.create_default_context()
            with socket.create_connection((domain, 443)) as sock:
                with context.wrap_socket(sock, server_hostname=domain) as ssock:
                    cert = ssock.getpeercert()
                    
            expiry = datetime.strptime(cert['notAfter'], '%b %d %H:%M:%S %Y %Z')
            days_until_expiry = (expiry - datetime.now()).days

            return {
                'status': 'ok' if days_until_expiry > self.thresholds['ssl_expiry_warning'] else 'warning',
                'expiry_date': expiry.isoformat(),
                'days_until_expiry': days_until_expiry
            }
        except Exception as e:
            return {
                'status': 'error',
                'error': str(e)
            }

    def _check_dns(self, domain: str) -> Dict:
        """Check DNS records"""
        try:
            resolver = dns.resolver.Resolver()
            records = {
                'A': resolver.resolve(domain, 'A'),
                'MX': resolver.resolve(domain, 'MX'),
                'NS': resolver.resolve(domain, 'NS')
            }

            return {
                'status': 'ok',
                'records': {
                    'A': [str(r) for r in records['A']],
                    'MX': [str(r) for r in records['MX']],
                    'NS': [str(r) for r in records['NS']]
                }
            }
        except Exception as e:
            return {
                'status': 'error',
                'error': str(e)
            }

    def _determine_status(self, checks: Dict) -> str:
        """Determine overall status from all checks"""
        if any(check.get('status') == 'error' for check in checks.values()):
            return 'error'
        if any(check.get('status') == 'warning' for check in checks.values()):
            return 'warning'
        return 'ok'

    def _log_results(self, results: Dict) -> None:
        """Log monitoring results"""
        status = results['status']
        domain = results['domain']
        
        if status == 'error':
            self.logger.error(f"Health check failed for {domain}: {results}")
        elif status == 'warning':
            self.logger.warning(f"Health check warning for {domain}: {results}")
        else:
            self.logger.info(f"Health check passed for {domain}: {results}")

    def get_uptime_stats(self, domain: str, days: int = 30) -> Dict:
        """Calculate uptime statistics for a domain"""
        # Implement your uptime calculation logic here
        return {
            'domain': domain,
            'period': f'{days} days',
            'uptime_percentage': 99.9,
            'total_outages': 1,
            'total_warnings': 2,
            'average_response_time': 0.5
        } 