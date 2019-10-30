export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5db9a1f57561d469815deac0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages3-studio-kthyvwz6',
                  apiId: '278b2a6a-d133-466c-a247-01bf8f7f97a7'
                },
                {
                  buildHookId: '5db9a1f56051f56180798d71',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages3-web',
                  apiId: '5181c7e2-4d7b-4a26-9239-a22022d2f35c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-nextjs-landing-pages3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages3-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
