// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-continuous-distribution-amp-pdf",
        
          title: "Continuous Distribution &amp; PDF",
        
        description: "Understand continuous probability distributions and PDF. Learn how histograms become density functions with intuitive manufacturing examples.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/continuous-distribution/";
          
        },
      },{id: "post-normal-distribution",
        
          title: "Normal Distribution",
        
        description: "Complete guide to Normal (Gaussian) distribution. Learn standard normal, mean, variance, sigma, and why it matters for machine learning algorithms.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/normal-distribution/";
          
        },
      },{id: "post-random-variables",
        
          title: "Random Variables",
        
        description: "Understand random variables with intuitive examples. Learn discrete vs continuous random variables, PMF, PDF, and probability distributions for machine learning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/random-variables/";
          
        },
      },{id: "post-understanding-derivatives",
        
          title: "Understanding Derivatives",
        
        description: "Learn derivatives intuitively with visual examples. Understand slope, rate of change, gradient, and why derivatives matter for gradient descent in ML.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/understanding-derivatives/";
          
        },
      },{id: "post-self-attention",
        
          title: "Self Attention",
        
        description: "Master self-attention mechanism in transformers. Learn Queries, Keys, Values, scaled dot-product attention with intuitive examples and mathematical derivations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/self-attention/";
          
        },
      },{id: "post-transformer-model-architecture",
        
          title: "Transformer Model Architecture",
        
        description: "Complete guide to Transformer architecture. Learn encoder, decoder, multi-head attention, positional encoding, and masked attention with detailed explanations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/transformer-architecture/";
          
        },
      },{id: "post-birth-of-attention-mechanism",
        
          title: "Birth of Attention Mechanism",
        
        description: "Learn how attention mechanism works in seq2seq encoder-decoder models. Understand context vectors, attention weights, and why attention solves the long sequence problem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/birth-of-attention-mechanism/";
          
        },
      },];
