<script>
  // Social media links
  const socials = [
    { name: 'GitHub', url: 'https://github.com/phillipdyb', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/phillip-dyb-sandnes-9881b6201/', icon: '💼' }
  ];

  // Content sections
  const sections = [
    {
      title: 'About Me',
      content: 'I am a first-year Computer Science Engineering student at NTNU Trondheim.'
    },
    {
      title: 'Work Experience',
      content: '4 years as an IT Operations Technician at Solwr Software AS.'
    },
    {
      title: 'Current projects',
      content: 'IPAM - Internet Protocol Address Manager.'
    }
  ];
</script>

<svelte:head>
    <title>Philz' E-portfolio</title>
</svelte:head>

<main>
  <div class="container">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Hi 👋🏼</h1>
      <p class="subtitle">Welcome</p>
    </section>

    <!-- Social Links Section -->
    <section class="socials">
      <h2>Connect With Me</h2>
      <div class="social-grid">
        {#each socials as social}
          <a href={social.url} class="social-link" target="_blank" rel="noopener noreferrer">
            <span class="icon">{social.icon}</span>
            <span class="name">{social.name}</span>
          </a>
        {/each}
      </div>
    </section>

    <!-- Content Sections -->
    {#each sections as section}
      <section class="content-section">
        <h2>{section.title}</h2>
        <p>{section.content}</p>
      </section>
    {/each}
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #0a0a0a;
    color: #e0e0e0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
  }

  main {
    min-height: 100vh;
    padding: 2rem;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero {
    text-align: center;
    padding: 4rem 0;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #999;
    margin-top: 0.5rem;
  }

  section {
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #fff;
    border-bottom: 2px solid #333;
    padding-bottom: 0.5rem;
  }

  .socials {
    background: #111;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #222;
  }

  .social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .social-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    text-decoration: none;
    color: #e0e0e0;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: #222;
    border-color: #667eea;
    transform: translateY(-2px);
  }

  .icon {
    font-size: 2rem;
  }

  .name {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .content-section {
    background: #111;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #222;
  }

  .content-section p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ccc;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .social-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    main {
      padding: 1rem;
    }
  }
</style>