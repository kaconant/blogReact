const blog = [
    { title: 'First Blog', author: 'Krissy Conant', info: 'Blah'},
    { title: 'Second Blog', author: 'Krissy Conant', info: 'Blah'},
    { title: 'Third Blog', author: 'Krissy Conant', info: 'Blah'}
]

let h = React.createElement;

let container = h('div', null, [
    h('h1', null, 'My React Blog'), 
    h('div', { className: 'card' },
        blog.map(blog =>
            h('div', { className : 'card-body' }, [
                h('div', null, blog.title),
                h('div', null, blog.author),
                h('div', null, blog.info),
            ])
        )
    ),   
    h('footer', null, 'Copyright 2018'),
]);

ReactDOM.render(
    container,
    document.querySelector('.react-root')
)
