"use client";
import React, { useEffect, useState } from "react";
import ContentfulApi from "./ContentfulApi";

const StoryBookHeroSection = ({ backgroundImg, description, heading }: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const query = `
      query heroSectionEntryQuery {
        heroSection(id: "2hksra7gJx21JTzEvv60YC") {
          sys {
            id
          }
          heading
          description
          backgroundImg {
            url
          }
          # add the fields you want to query
        }
      }
          `;
      try {
        setLoading(true);
        const response = await ContentfulApi.callContentful(query);
        console.log(response);
        const { data }: any = response;
        setData(data?.heroSection);
        if (response) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blog posts from Contentful:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  console.log(data);
  // const { backgroundImg, description, heading }: any = data;
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          backgroundColor: "#EDF2F7",
          padding: "2rem",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            margin: "center",
          }}
          src={backgroundImg}
          alt="Background"
        />
        <div style={{ marginTop: "15rem", position: "relative", zIndex: 10 }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            {heading}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#FFFFFF",
              marginTop: "1rem",
            }}
          >
            {description}
          </p>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#3B82F6",
              color: "#FFFFFF",
              borderRadius: "0.375rem",
              boxShadow: "0 0.125rem 0.25rem rgba(59, 130, 246, 0.2)",
            }}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryBookHeroSection;
