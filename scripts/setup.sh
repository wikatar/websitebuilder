#!/bin/bash

# Create main directory structure
mkdir -p WebsiteBuilderBot/{bot_core,websites,tests,scripts,docs}
mkdir -p WebsiteBuilderBot/bot_core/templates/{basic_site,blog_template}
mkdir -p WebsiteBuilderBot/bot_core/templates/basic_site/assets

# Create initial files
touch WebsiteBuilderBot/bot_core/__init__.py
touch WebsiteBuilderBot/bot_core/builder.py
touch WebsiteBuilderBot/bot_core/utils.py
touch WebsiteBuilderBot/bot_core/config.json
touch WebsiteBuilderBot/requirements.txt

# Initialize git repository and push to GitHub
git init
git add README.md
git commit -m "Initial commit: Add README.md"
git branch -M main
git remote add origin https://github.com/wikatar/websitebuilder.git
git push -u origin main 