export const siteConfig = {
    name: "Tiffanie Huang",
    title: "University of Chicago, Mathematics B.S.",
    description: "Portfolio website of Tiffanie Huang",
    accentColor: "#1d4ed8",
    social: {
        email: "tiffaniehuang25@gmail.com",
        linkedin: "https://www.linkedin.com/in/tiffanie-huang-79a361221",
        github: "https://github.com/tiffanieh",
    },
    aboutMe:
        "As a recent UChicago math grad with a soft spot for big questions and messy datasets, I’m dedicated to finding a quantitative approach for problems ranging from studying human gene functions to shaping climate change policy support to classifying underwater footage. I believe working with numbers (and what they reveal!) shouldn't feel like a barrier, and I try to bring that philosophy to everything I build. Other interests: Studio Ghibli films, sci-fi, cello, creative writing.",
    skills: ["Python (NumPy, Tensorflow, PyTorch, Pandas)", "C", "R", "SQL", "git"],
    projects: [
        {
        name: "Which frame fits? Policy learning with framing for climate change policy attitudes",
        description:
            "Evaluating effects of different climate change policy framing through a randomized experiment",
        link: "https://journals.sagepub.com/doi/10.1177/20531680251414927",
        skills: ["Python", "R", "experimental design"],
        },
        {
        name: "Underwater computer vision",
        description:
            "Transfer learning application for object detection and video summarization of marine dive footage for Schmidt Ocean Institute",
        link: "https://datascience.uchicago.edu/people/tiffanie-huang",
        skills: ["Python", "PyTorch", "Docker", "git", "parallel programming"],
        },
        {
        name: "Python implementation of Go",
        description:
            "Playable Go game, including the game logic, a GUI, a terminal-based interface, a simple game-playing strategy, and tests (code available upon request)",
        skills: ["Python", "pygame", "pytest", "git"],
        },
        {
        name: "Finding gene expression prediction associations across different tissues for growing catalog of human gene functions",
        description:
            "Analyzing gene expression associations with complex traits from outputs of ENFORMER-trained prediction models (virtual lab notebook available upon request)",
        skills: ["Python", "bash", "TensorFlow", "Parsl", "high performance computing"]
        },
        {
        name: "Organically capped iridium nanoparticles as high-performance bifunctional electrocatalysts for full water splitting in acidic and alkaline media",
        description:
            "An alternate source of catalysts for water splitting process in sustainable hydrogen production,",
        link: "https://pubs.acs.org/doi/10.1021/acscatal.0c03747",
        skills: ["Data analysis (FTIR, CV, EIS)", "experimental design"],
        }
    ],
    experience: [
        {
        company: "Department of Medicine, The University of Chicago",
        title: "Quantitative Research Fellow / Research Assistant at Im Lab",
        dateRange: "Mar 2022 - Jun 2025",
        bullets: [
            "Contributed to a growing catalog of human gene functions in a lab focused on analyzing high-dimensional genomic data and developing computational methods to study gene regulation and expression, particularly in relation to complex traits and diseases",
            "Trained gene expression prediction models for integration into S-Predixcan, a method that utilizes GWAS summary statistics to analyze gene expression associations with complex traits, in a supercomputing environment",
            "Created scripts to query biosample objects from ENCODE project’s API and annotate target genomic tracks",
        ],
        },
        {
        company: "Data Science Institute, The University of Chicago",
        title: "Research Assistant, Schmidt Ocean Institute",
        dateRange: "Jun 2022 - Aug 2022",
        bullets: [
            "Under the mentorship of Data Science Institute faculty, collaborated with the Schmidt Ocean Institute to develop an automated pipeline for tagging and classifying underwater video data",
            "Developed transfer learning application on open-source image databases and pretrained Faster R-CNN model for object detection and transformations of hours of dive footage to expand marine organism image data",
            "Performed video summarization, identifying key frames to enhance the searchability and accessibility of footage",
        ],
        },
        {
        company: "Ocean Sciences Division, UCSC",
        title: "Research Assistant",
        dateRange: "Jun 2020 - Aug 2020",
        bullets: [
            "Collected and processed observational datasets using NumPy/NetCDF to study the ocean as a driving force for weather and climate, focusing on the Pacific Blob area",
            "Found significant relationships between sea surface temperature, surface level pressure, and surface air temperature in the Northeastern Pacific area and North America",
        ],
        },
        {
        company: "Chemistry & Biochemistry Division, UCSC",
        title: "Research Assistant",
        dateRange: "Jun 2019 - Sep 2019",
        bullets: [
            "Researched catalysts in water splitting process and impacts of metal-ligand interfacial interactions, using characterization techniques to study functionalized nanoparticles and their properties",
            "Performed analysis and conducted experiments including material synthesis, characterization, and electrochemistry tests in a wet lab setting",
            "Awarded Top Presentation in Chemistry category at 2019 Sigma Xi Research Conference in Madison, WI",
            "Publication in ACS Catalysis",
        ],
        }
    ],
    education: [
        {
        school: "University of Chicago",
        degree: "Bachelor of Science in Mathematics",
        dateRange: "2021 - 2025",
        achievements: [
            "Major GPA 3.8 / 4.0",
            "National Merit Scholar",
            "Relevant coursework: Linear Algebra; Real Analysis; Complex Analysis; Introduction to Mathematical Probability; Statistical Theory & Methods; Markov Chains, Martingales, and Brownian Motion; Measure & Integration; Systems Programming",
            "Course Assistant for DATA 261: Statistical Pitfalls & Misinterpretation of Data, DATA 118-119: Introduction to Data Science I-II, BIOS 20172: Mathematical Modeling for Biology"
        ],
        },
    ],
    };
