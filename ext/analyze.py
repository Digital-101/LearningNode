import matplotlib.pyplot as plt
import numpy as np

# Data from the document
features = [
    "User Profiles", "Goal Oriented Matching", "Advanced Filtering", "Secure Messaging",
    "Video & Voice Calls", "UI/UX Design", "Backend Development", "Database Integration",
    "Testing & QA", "Maintenance & Updates", "Icebreaker Prompts", "Profile Verification",
    "Real-Time Activity Status", "Community & Forum Spaces", "Subscription Plans",
    "AI-Powered Compatibility", "Date Planning", "Privacy & Safety", "Event-Based Matching",
    "Govt-Issued Verification"
]

estimated_costs_min = [
    5000, 7000, 4000, 2000, 12000, 5000, 10000, 5000, 5000, 2000, 3000, 2000, 5000,
    8000, 30000, 15000, 7000, 10000, 5000, 3000
]

estimated_costs_max = [
    10000, 12000, 8000, 15000, 20000, 10000, 15000, 8000, 8000, 5000, 10000, 10000,
    10000, 14000, 90000, 55000, 15000, 50000, 10000, 5000
]

development_time_min = [
    3, 4, 3, 4, 6, 3, 4, 3, 3, 1, 2, 4, 3, 6, 4, 6, 3, 4, 3, 2
]

development_time_max = [
    4, 6, 3, 6, 8, 4, 6, 4, 4, 2, 3, 6, 4, 8, 6, 8, 4, 6, 4, 4
]

# Bar chart for cost comparison
x = np.arange(len(features))
width = 0.35

plt.figure(figsize=(14, 8))
plt.bar(x - width/2, estimated_costs_min, width, label='Min Cost (R)', color='lightblue')
plt.bar(x + width/2, estimated_costs_max, width, label='Max Cost (R)', color='steelblue')

plt.xticks(x, features, rotation=90)
plt.ylabel('Estimated Cost (R)')
plt.title('Cost Comparison by Feature')
plt.legend()
plt.tight_layout()
plt.show()

# Timeline chart for development time
plt.figure(figsize=(14, 8))
plt.bar(x - width/2, development_time_min, width, label='Min Development Time (Weeks)', color='lightgreen')
plt.bar(x + width/2, development_time_max, width, label='Max Development Time (Weeks)', color='darkgreen')

plt.xticks(x, features, rotation=90)
plt.ylabel('Development Time (Weeks)')
plt.title('Development Time by Feature')
plt.legend()
plt.tight_layout()
plt.show()

# Pie chart for cost distribution (average cost)
average_costs = [(min_cost + max_cost) / 2 for min_cost, max_cost in zip(estimated_costs_min, estimated_costs_max)]

plt.figure(figsize=(10, 10))
plt.pie(average_costs, labels=features, autopct='%1.1f%%', startangle=140, colors=plt.cm.tab20.colors)
plt.title('Cost Distribution by Feature (Average)')
plt.tight_layout()
plt.show()
