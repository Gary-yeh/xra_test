import os
import requests
import urllib.parse

# Ensure directory exists
output_dir = r"d:\google antigravity\xra_test\images"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

images = [
    {"url": "https://www.arplanet.com.tw/wp-content/uploads/2019/12/智慧工業.jpg", "name": "industry.jpg"},
    {"url": "https://www.arplanet.com.tw/wp-content/uploads/2019/08/智慧建築.jpg", "name": "building.jpg"},
    {"url": "https://www.arplanet.com.tw/wp-content/uploads/2019/07/智慧零售.jpg", "name": "retail.jpg"},
    {"url": "https://www.arplanet.com.tw/wp-content/uploads/2019/07/娛樂與文化.jpg", "name": "tourism.jpg"},
    {"url": "https://www.arplanet.com.tw/wp-content/uploads/2019/07/教育與企業培訓.jpg", "name": "education.jpg"},
    {"url": "https://www.arplanet.com.tw/wp-content/uploads/2021/11/無接觸保健.jpg", "name": "medical.jpg"}
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

for img in images:
    try:
        # Handle URL encoding for Chinese characters if needed, but requests often handles it.
        # However, to be safe with mixed paths, we can quote the path part.
        # A simple approach for these known URLs:
        encoded_url =  urllib.parse.quote(img['url'], safe=':/')
        
        print(f"Downloading {encoded_url}...")
        response = requests.get(encoded_url, headers=headers)
        if response.status_code == 200:
            with open(os.path.join(output_dir, img['name']), 'wb') as f:
                f.write(response.content)
            print(f"Saved {img['name']}")
        else:
            # Try unencoded original just in case 'requests' prefers it
            print(f"Failed encoded. Trying original {img['url']}...")
            response = requests.get(img['url'], headers=headers)
            if response.status_code == 200:
                with open(os.path.join(output_dir, img['name']), 'wb') as f:
                    f.write(response.content)
                print(f"Saved {img['name']} (original URL)")
            else:
                print(f"Failed to download {img['name']}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {img['name']}: {e}")
