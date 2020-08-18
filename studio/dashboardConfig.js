export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f3bd808f3701e5658c1e465',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-2-studio-r5r1ey7c',
                  apiId: '3931cf9e-a371-423b-8b74-fc3d8369a3c8'
                },
                {
                  buildHookId: '5f3bd808cce3466b080afab1',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-2-web-gdgx8jou',
                  apiId: 'c78e65f1-db4b-4789-82b2-c6bbe905e85f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbuitvydas/sanity-gridsome-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-2-web-gdgx8jou.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
