module.exports = {
 content: [
   ["articles", {
     page: '/_article',
     permalink: 'articles/:slug',
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   ["narration", {
    page: '/_narration',
    permalink: 'narration/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["translations", {
    page: '/_translations',
    permalink: 'translations/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["projects", {
     page: '/_projects',
     permalink: "projects/:slug",
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   ["courses", {
    page: '/_courses',
    permalink: '/courses/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["events", {
    page: '/_events',
    permalink: '/events/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
 ],
 api: isStatic => {
  return {
    browserBaseURL: isStatic ? 'https://sacred-traditions' : '',
  }
},

}