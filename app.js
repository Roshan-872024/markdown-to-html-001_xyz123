async function loadMarkdown() {
    const params = new URLSearchParams(window.location.search);
    const url = params.get('url') || 'data:text/markdown,# Sample Markdown\nThis is a **bold** statement.\n\n```python\nprint(\"Hello from code block!\")\n```\n\n';
    try {
        const response = await fetch(url);
        const text = await response.text();
        const html = marked.parse(text);
        document.querySelector('#markdown-output').innerHTML = html;
        hljs.highlightAll();
    } catch (error) {
        document.querySelector('#markdown-output').innerHTML = 'Error loading content.';
    }
}

loadMarkdown();