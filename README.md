# PlantUML Setup

This repository is configured to use PlantUML with VS Code.

## Prerequisites

- [Docker](https://www.docker.com/) installed and running.
- [VS Code](https://code.visualstudio.com/) installed.

## Setup

1.  **Install the Extension**: When you open this folder in VS Code, it should recommend installing the `jebbs.plantuml` extension. Please accept the recommendation.
2.  **Start the Server**: Run the following command to start the local PlantUML server:
    ```bash
    docker compose up -d
    ```
    This ensures your diagrams are rendered locally without sending data to a public server.

## Usage

1.  Open `sample.puml` to see an example diagram.
2.  Press `Option + D` (Mac) or `Alt + D` (Windows/Linux) to preview the diagram.
