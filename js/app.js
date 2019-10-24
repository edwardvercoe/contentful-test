

const client = contentful.createClient({
    space: '8os36cm9e0s5',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'rIAfyRxpQCz7zkDew6TOV66ZEUDLyGbPHmQUb4FUkBQ'
});

client
    .getEntry('2ADe6WkNujTYEhXGpt11Mh')
    .then(entry => {
        console.log(entry.fields)
        const rawRichTextField = entry.fields.about;
        return documentToHtmlString(rawRichTextField);
      })
      .then(renderedHtml => {
        // do something with html, like write to a file
        console.log(renderedHtml);
        document.getElementById('rich-text-body').innerHTML = renderedHtml;
      })
    .catch(error => console.log(error));