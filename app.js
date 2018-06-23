let h = React.createElement;

const blogs = [
    { title: 'First Blog', author: 'Krissy Conant', info: 'Blah'},
    { title: 'Second Blog', author: 'Krissy Conant', info: 'Blah'},
    { title: 'Third Blog', author: 'Krissy Conant', info: 'Blah'},
    { title: 'The Worst Blog', author: 'Mr. Blogger', info: 'Ew', featured: true},
]

let blogRow = (blog) => 
    h('div', { className : 'card' }, [
        h('div', { className : 'card-body' }, blog.title),
        h('div', { className : 'card-body' }, blog.author),
        h('div', { className : 'card-body' }, blog.info),
    ])

let blogList = (props) =>
    h('div', { className: 'container' },
            props.blogs.map(blog =>
                h(blogRow, blog)
            )
    )

let container = h('div', null, [
    h('h1', null, 'My React Blog'), 
    h('h2', null, 'All Blogs'),
    h(blogList, { blogs: blogs }),
    h('h2', null, 'Bad Blogs'), 
    h(blogList, { blogs: blogs.filter(blog => blog.featured) }),
    h('footer', null, 'Copyright 2018'),
]);

ReactDOM.render(
    container,
    document.querySelector('.react-root')
)
