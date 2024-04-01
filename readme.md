# Structure from Motion (SfM) Project

This repository contains the code and resources for a Structure from Motion (SfM) project. The project is aimed at reconstructing a 3D scene from a series of 2D images using computer vision techniques and algorithms.

## Project Structure

- `assignment2.py`: Main script for running the SfM algorithm.
- `feat_match.py`: Contains the feature matching algorithm implementation using SIFT.
- `sfm.py`: Includes functions related to the SfM pipeline such as camera pose estimation, triangulation, and point cloud generation.
- `utils.py`: Utility functions used across the project.
- `index.html`: The HTML file providing an overview and detailed explanation of the project, including the triangulation section.
- `js/`: Directory containing JavaScript files.
  - `script.js`: JavaScript file for interactive elements or visualization on the webpage.
- `assets/`: Directory for static files such as images, data files, etc.
- `.vscode/`: Configuration files for Visual Studio Code editor.
- `__pycache__/`: Python cache directory where compiled bytecode files are stored.

## Web Interface

The project's results and explanations are presented through a web interface, accessible by opening the `index.html` file in a web browser. This HTML file includes detailed sections on the project overview, implementation steps, results, and triangulation process. JavaScript functionality, linked via `script.js`, can be utilized for interactive visualizations or additional client-side logic.

## Usage

To execute the SfM algorithm:

```sh
python assignment2.py
```