---
layout: default
permalink: /cv/
title: CV
nav: true
nav_order: 5
toc:
  sidebar: left
---

<style>
  /* ===============================
     GLOBAL STYLES
     =============================== */
  * {
    box-sizing: border-box;
  }

  .cv-content {
    font-family: Arial, Helvetica, sans-serif;
    margin: 24px;
    color: var(--global-text-color);
    line-height: 1.4;
  }

  .cv-content a {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .cv-content a:hover {
    text-decoration: underline;
  }

  .cv-content p {
    margin: 6px 0;
    font-size: 14px;
    color: var(--global-text-color);
  }

  .cv-content ul {
    margin: 6px 0 10px 18px;
  }

  .cv-content li {
    margin-bottom: 4px;
    font-size: 14px;
    color: var(--global-text-color);
  }

  .cv-content strong {
    color: var(--global-text-color);
  }

  /* ===============================
     HEADER SECTION
     =============================== */
  .cv-content .container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
  }

  .cv-content .image img {
    width: 160px;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  .cv-content .text {
    flex: 1;
  }

  .cv-content .text h2 {
    margin: 0 0 8px 0;
    font-size: 26px;
    color: var(--global-text-color);
  }

  .cv-content .text p {
    font-size: 14px;
  }

  /* ===============================
     SECTION HEADINGS
     =============================== */
  .cv-content h3 {
    margin-top: 18px;
    margin-bottom: 6px;
    font-size: 16px;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 3px;
    color: var(--global-text-color);
  }

  /* ===============================
     PRINT SETTINGS
     =============================== */
  @media print {
    .cv-content {
      margin: 18mm;
      color: #000;
    }

    .cv-content .container,
    .cv-content img {
      page-break-inside: avoid;
    }

    .cv-content a {
      color: black;
      text-decoration: none;
    }

    .cv-content p,
    .cv-content li,
    .cv-content h3,
    .cv-content strong {
      color: #000;
    }

    .cv-content h3 {
      border-bottom-color: #000;
    }
  }

  /* ===============================
     ICON SETTINGS
     =============================== */
  .cv-content .text a {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .cv-content .text a:hover {
    text-decoration: underline;
  }

  .cv-content .phone-icon {
    color: var(--global-theme-color);
  }
</style>

<div class="cv-content">
  <!-- ===============================
       HEADER
       =============================== -->
  <div class="container">
    <div class="image">
      <img src="{{ '/assets/img/ramendra-photo.jpg' | relative_url }}" alt="Ramendra Kumar">
    </div>

    <div class="text">
      <h2>Ramendra Kumar</h2>

      <p>
        ✉️ <a href="mailto:karna.ramenk@gmail.com">karna.ramenk@gmail.com</a>
      </p>

      <p>
        🔗 <a href="https://www.linkedin.com/in/ramendra-kumar-57334478/" title="LinkedIn">LinkedIn</a>
        &nbsp;&nbsp;
        🌐 <a href="https://rami-rk.github.io/" title="Blog">Blog</a>
        &nbsp;&nbsp;
        <span class="phone-icon">&#9742;</span> 98******42
      </p>
    </div>
  </div>

  <!-- ===============================
       SUMMARY
       =============================== -->
  <h3>SUMMARY</h3>
  <p>
    I am a Data Scientist, currently working at Volkswagen (Scania), contributing to real-world AI projects with hands-on experience
    in deploying and fine-tuning both classical and transformer-based models such as BERT, GPT variants, and publicly available LLMs.
    Skilled in leveraging cloud platforms like AWS, including AWS Bedrock, for scalable AI/ML development. Experienced in implementing
    MLOps/LLMOps practices for model lifecycle management, automation, and observability. Proficient in orchestrating AI workflows
    using Kubernetes and building robust NLP and Generative AI solutions.
  </p>

  <!-- ===============================
       WORK EXPERIENCE
       =============================== -->
  <h3>WORK EXPERIENCE</h3>
  <ul>
    <li>
      <strong>Data Scientist | AI/ML Consultant – Volkswagen Group Technology Solutions India, Gurugram
      (Nov 2024 – Present)</strong>
      <ul>
        <li>End-to-end involvement in AI/ML project lifecycles from problem scoping to deployment and monitoring.</li>
      </ul>
    </li>

    <li>
      <strong>Principal Consultant – NSE TalentSprint, Hyderabad
      (April 2021 – Oct 2024)</strong>
      <ul>
        <li>Led and coordinated academic and operational teams.</li>
        <li>Designed industry-relevant projects and assignments in ML and Generative AI.</li>
        <li>Delivered lecture sessions on advanced AI topics.</li>
      </ul>
    </li>

    <li>
      <strong>Research Fellow – IIT Delhi (March – May 2019)</strong>
      <ul>
        <li>Project: Energy Efficiency and Occupant Comfort Management in the Built Environment.</li>
        <li>Responsibilities: BMS data collection, analysis, and modeling.</li>
      </ul>
    </li>

    <li><strong>Assistant Professor – Thapathali Campus, Kathmandu, Nepal (June 2015 – Dec 2016)</strong></li>
    <li><strong>Lecturer – Sagarmatha Engineering College, Kathmandu, Nepal (Nov 2011 – May 2015)</strong></li>
  </ul>

  <!-- ===============================
       ACADEMIC DETAILS
       =============================== -->
  <h3>ACADEMIC DETAILS</h3>
  <ul>
    <li>M.S. Mechanical Engineering (Thermal Science), CGPA: 8.57/10 – IIT Delhi, 2019</li>
    <li>B.E. Mechanical Engineering, 70.82% – T.U. Kathmandu, Nepal, 2010</li>
  </ul>

  <!-- ===============================
       TECHNICAL SKILLS
       =============================== -->
  <h3>TECHNICAL SKILLS</h3>
  <p>
    Machine Learning, MLOps, Deep Learning, Computer Vision, NLP (BERT, GPT, ChatGPT, T5, LLMs) |
    Python (NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow/Keras, PyTorch) |
    AWS (SageMaker, Bedrock, S3, EC2, ECR, ECS, Fargate)
  </p>

  <!-- ===============================
       COURSES
       =============================== -->
  <h3>COURSES (Relevant to DS/ML)</h3>
  <ul>
    <li>Computer Programming</li>
    <li>Probability and Statistics</li>
    <li>Linear Algebra</li>
    <li>Numerical Methods</li>
    <li>Differential and Integral Calculus</li>
    <li>Engineering Economics</li>
    <li>Experimental Methods</li>
    <li>Economics & Planning of Energy Systems</li>
    <li>
      <a href="https://www.linkedin.com/in/ramendra-kumar-57334478/details/certifications">
        CNN, Neural Networks & Deep Learning, Sequence Models
      </a>
    </li>
  </ul>

  <!-- ===============================
       THESIS
       =============================== -->
  <h3>IIT DELHI THESIS</h3>
  <ul>
    <li>
      <strong>Title: Performance Analysis of an In-situ Data Center</strong>
      <ul>
        <li>Supervisor: Prof. Sanjeev Jain</li>
        <li>Energy analysis using data analytics, multivariable regression, and neural networks.</li>
        <li>Airflow and thermal distribution analysis using Ansys ICEPAK (CFD).</li>
        <li>Outcome: Identification of energy conservation opportunities.</li>
      </ul>
    </li>
  </ul>

  <!-- ===============================
       ACHIEVEMENTS
       =============================== -->
  <h3>SCHOLASTIC ACHIEVEMENTS</h3>
  <ul>
    <li>Merit-based full scholarship admission to Pulchowk Campus, Nepal.</li>
    <li>Best Project Award – HVAC domain, IIT Delhi (2018–19).</li>
  </ul>

  <!-- ===============================
       PROJECTS
       =============================== -->
  <h3>PERSONAL PROJECTS</h3>
  <ul>
    <li>
      <a href="https://github.com/Rami-RK/Machine-Learning-Projects">Classical Machine Learning Implementations</a>
      <ul>
        <li>Credit Card Fraud Detection</li>
        <li>Loan Amount Prediction</li>
        <li>Housing Price Prediction</li>
      </ul>
    </li>
    <li><a href="https://huggingface.co/spaces/Ramendra/demo_B21_AIML">CNN Transfer Learning – HF Spaces</a></li>
    <li><a href="https://github.com/Rami-RK/image_segmentation">Image Segmentation (UNet, DeepLabV3+)</a></li>
    <li><a href="https://github.com/Rami-RK/Retrieval_Augmented_Generation_RAG">RAG-based LLM Applications</a></li>
    <li><a href="https://github.com/Rami-RK/MLOps">ML in Production – CI/CD & Packaging</a></li>
  </ul>

  <!-- ===============================
       PUBLICATIONS
       =============================== -->
  <h3>PUBLICATIONS</h3>
  <ul>
    <li>
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778819320729">
        Performance Analysis of an In-situ Data Centre – Energy and Buildings (Elsevier), Feb 2020
      </a>
    </li>
    <li>
      <a href="http://conference.ioe.edu.np/publications/ioegc2013/IOEGC-Proceedings-2013.pdf">
        Study on Diesel Fuel Consumption Reduction Using Solar Thermal Energy – IOE GC 2013
      </a>
    </li>
  </ul>
</div>
