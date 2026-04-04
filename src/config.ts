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
        "As a recent UChicago math grad with a soft spot for big questions and messy datasets, I’m dedicated to finding a quantitative approach for problems, from studying human gene functions to shaping climate change policy support to classifying underwater footage. I believe working with numbers (and what they reveal!) shouldn't feel like a barrier, and I try to bring that philosophy to everything I build. Also: devoted Ghibli fan, sci-fi enthusiast, cellist, and occasional writer.",
    skills: ["Python (NumPy, Tensorflow, PyTorch, Pandas),", "C", "R", "SQL", "git"],
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
        link: "https://datascience.uchicago.edu/people/tiffanie-huang/",
        skills: ["PyTorch", "Docker", "git"],
        },
        {
        name: "Python implementation of Go",
        description:
            "Playable Go game, including the game logic, a GUI, a terminal-based interface, a simple game-playing strategy, and tests. Code available upon request.",
        skills: ["pygame", "pytest", "git"],
        },
    ],
    experience: [
        {
        company: "Data Science Institute, The University of Chicago",
        title: "Course Assistant, Data Science Department",
        dateRange: "Jan 2024 - Jun 2025",
        bullets: [
            "Develop homework rubrics for DATA 11800-11900: Introduction to Data Science I-II and DATA 26100: Statistical Pitfalls & Misinterpretation of Data",
            "Graded and provided feedback for student assignments, labs, and projects on foundational topics such as probability, statistical methodology, data privacy, ethics, and basic machine learning",
        ],
        },
        {
        company: "Biological Sciences Division, The University of Chicago",
        title: "Quantitative Biology Research Fellow to Professor Hae Kyung Im ",
        dateRange: "Jun 2023 - Jun 2025",
        bullets: [
            "Contributed to a growing catalog of human gene functions in a lab focused on analyzing high-dimensional genomic data and developing computational methods to study gene regulation and expression, particularly in relation to complex traits and diseases",
            "Trained gene expression prediction models for integration into S-Predixcan, a method that utilizes GWAS summary statistics to analyze gene expression associations with complex traits, in a supercomputing environment",
            "Created scripts to query biosample objects from ENCODE project’s API and annotate target genomic tracks",
        ],
        },
                {
        company: "Biological Sciences Division, The University of Chicago",
        title: "Teaching Assistant",
        dateRange: "Mar 2023 - Jun 2025",
        bullets: [
            "Assisted in preparing curriculum for pre-health students for BIOS 20172: Mathematical Modeling for Biology, the quantitative methods course in the pre-med biology sequence that focuses on statistical analysis and mathematical modeling of biological data & processes",
            "Graded and proofread homework assignments, quizzes, exams; held office hours 3-4 hours a week as well as review sessions; provided supplementary notes and review materials to prepare students for exams and address topics they found challenging",
            "Introduced students to implementation of computational algorithms for biological data analysis and mathematical modeling using R in office hours and labs",
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
    ],
    education: [
        {
        school: "University of Chicago",
        degree: "Bachelor of Science in Mathematics",
        dateRange: "2021 - 2025",
        achievements: [
            "Major GPA 3.8 / 4.0",
            "National Merit Scholar",
        ],
        },
    ],
    };
