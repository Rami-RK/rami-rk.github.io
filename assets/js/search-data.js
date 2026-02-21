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
        
        description: "From discrete outcomes to continuous intervals - understanding probability density functions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/continuous-distribution/";
          
        },
      },{id: "post-normal-distribution",
        
          title: "Normal Distribution",
        
        description: "From Histogram to Normal Distribution.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/normal-distribution/";
          
        },
      },{id: "post-random-variables",
        
          title: "Random Variables",
        
        description: "Building the intuition of random variables, starting with a coin toss.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/random-variables/";
          
        },
      },{id: "post-understanding-derivatives",
        
          title: "Understanding Derivatives",
        
        description: "Building intuition and physical meaning of derivatives with simple examples.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/understanding-derivatives/";
          
        },
      },{id: "post-self-attention",
        
          title: "Self Attention",
        
        description: "From intuition to scaled dot-product attention.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/self-attention/";
          
        },
      },{id: "post-transformer-model-architecture",
        
          title: "Transformer Model Architecture",
        
        description: "From encoders to masked attention and decoders - Transformer architecture demystified.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/transformer-architecture/";
          
        },
      },{id: "post-birth-of-attention-mechanism",
        
          title: "Birth of Attention Mechanism",
        
        description: "The evolution of attention in sequence-to-sequence models.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/birth-of-attention-mechanism/";
          
        },
      },];
