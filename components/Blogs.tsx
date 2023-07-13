import { data } from "@/data/blogs";
import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section id="blogs" className="wrapper section-padding">
      <SectionTitle title="Timeworthy Articles" subtitle="Blogs" />
      {/* BLOGS */}
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        {data.map((blog: any) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            authorUrl={blog.authorUrl}
            publishedDate={blog.publishedDate}
            body={blog.body}
            blogUrl={blog.blogUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;