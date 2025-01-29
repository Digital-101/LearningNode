import random

# Simulated database of products and affiliate links
products = {
    "Product A": "https://affiliate-link.com/productA",
    "Product B": "https://affiliate-link.com/productB",
    "Product C": "https://affiliate-link.com/productC",
}

# Simulated user clicks
def simulate_user_clicks():
    return random.randint(1, 10)

# Simulate affiliate earnings
def calculate_earnings(clicks):
    earnings_per_click = 0.10  # $0.10 per click
    return clicks * earnings_per_click

# Main function
def main():
    print("Welcome to the Affiliate Marketing Simulator!")
    print("Here are the available products:")
    
    for product, link in products.items():
        print(f"{product}: {link}")
    
    clicks = simulate_user_clicks()
    earnings = calculate_earnings(clicks)
    
    print(f"\nYou got {clicks} clicks today!")
    print(f"Your estimated earnings for today: ${earnings:.2f}")

if __name__ == "__main__":
    main()