// For external images, replace this with the actual data
// Once you have this, I think you can just paste in the html on the <img src= if it's in the location you entered here

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com", //images link
        port: "",
        pathname: "/**", //
        search: "",
      },
    ],
  },
};

export default nextConfig;
