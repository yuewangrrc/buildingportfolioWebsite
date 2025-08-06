#!/bin/bash

# Build and run the portfolio website in Docker

echo "Building Docker image..."
docker build -t wang_yue_coding_assignment14 .

if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Starting container..."
    
    # Stop and remove existing container if it exists
    docker stop wang_yue_coding_assignment14 2>/dev/null || true
    docker rm wang_yue_coding_assignment14 2>/dev/null || true
    
    # Run the new container
    docker run -d -p 5575:5575 --name wang_yue_coding_assignment14 wang_yue_coding_assignment14
    
    echo "Portfolio website is now running at:"
    echo "http://localhost:5575"
    echo "http://127.0.0.1:5575"
    echo ""
    echo "To stop the container:"
    echo "docker stop wang_yue_coding_assignment14"
    echo "docker rm wang_yue_coding_assignment14"
else
    echo "Build failed!"
    exit 1
fi
