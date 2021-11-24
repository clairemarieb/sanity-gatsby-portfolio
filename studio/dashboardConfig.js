export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619ea153c1cae5c3aa22347b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vwjwut7g',
                  apiId: '7d2e51ca-58d1-4c44-9f81-76e438fa3f10'
                },
                {
                  buildHookId: '619ea1530fb62fba8102909a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nwve8v2m',
                  apiId: '1caefb66-3652-46d7-96b6-1f88e276350f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/clairemarieb/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nwve8v2m.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
