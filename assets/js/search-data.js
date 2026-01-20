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
