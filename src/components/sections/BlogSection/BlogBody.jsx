import React, { useState } from "react";
import Tab from "../../controls/Tab";
import BlogCard from "../../primitive/cards/BlogCard";
import {
  allBlogInfo,
  complianceBlogInfo,
  cybersecurityBlogInfo,
  productUpdatesBlogInfo,
  companyNewsBlogInfo,
} from "../../../mockdata/blogData";

const tabLists = [
  { tabName: "All", id: "all" },
  { tabName: "Compliance", id: "compliance" },
  { tabName: "Cybersecurity", id: "cybersecurity" },
  { tabName: "Product Updates", id: "product_updates" },
  { tabName: "Company News", id: "company_news" },
];

const BlogBody = () => {
  const [activeTab, setActiveTab] = useState(tabLists[0].id);
  return (
    <div className="container mx-auto space-y-10">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-20 pb-10 md:pb-24">
        <div className="w-full md:w-[30%]">
          {tabLists.map((tab) => (
            <Tab
              key={tab.id}
              tabName={tab.tabName}
              active={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <div className="w-full md:w-[70%]">
          <div className="space-y-7">
            {activeTab === "all" && (
              <>
                {allBlogInfo.map((card, index) => (
                  <BlogCard
                    key={index}
                    date_posted={card.date_posted}
                    heading={card.heading}
                    link={card.link}
                    blog_post_image={card.blog_post_image}
                    category={card.category}
                    blog_title={card.blog_title}
                  />
                ))}
              </>
            )}
            {activeTab === "compliance" && (
              <>
                {complianceBlogInfo.map((card, index) => (
                  <BlogCard
                    key={index}
                    date_posted={card.date_posted}
                    heading={card.heading}
                    link={card.link}
                    blog_post_image={card.blog_post_image}
                    category={card.category}
                    blog_title={card.blog_title}
                  />
                ))}
              </>
            )}
            {activeTab === "cybersecurity" && (
              <>
                {cybersecurityBlogInfo.map((card, index) => (
                  <BlogCard
                    key={index}
                    date_posted={card.date_posted}
                    heading={card.heading}
                    link={card.link}
                    blog_post_image={card.blog_post_image}
                    category={card.category}
                    blog_title={card.blog_title}
                  />
                ))}
              </>
            )}
            {activeTab === "product_updates" && (
              <>
                {productUpdatesBlogInfo.map((card, index) => (
                  <BlogCard
                    key={index}
                    date_posted={card.date_posted}
                    heading={card.heading}
                    link={card.link}
                    blog_post_image={card.blog_post_image}
                    category={card.category}
                    blog_title={card.blog_title}
                  />
                ))}
              </>
            )}
            {activeTab === "company_news" && (
              <>
                {companyNewsBlogInfo.map((card, index) => (
                  <BlogCard
                    key={index}
                    date_posted={card.date_posted}
                    heading={card.heading}
                    link={card.link}
                    blog_post_image={card.blog_post_image}
                    category={card.category}
                    blog_title={card.blog_title}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogBody;
