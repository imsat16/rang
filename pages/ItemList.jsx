const ItemList = ({blogs, title}) => {
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <div className=" loading relative w-1/4 bg-red-400 h-1/4" >
      <h2>{title}</h2>
      {blogs.map (blog => (
        <div className="--i" key={blog.id} >
          <h2>{blog.title}</h2>
          <p>Writen by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
