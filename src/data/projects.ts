import { slugify } from "@/utils/slugify";
import gymImage from "/src/assets/images/gym.webp";
import educationImage from "@/assets/project-education.jpg";

const gymBefore2 = "/src/assets/images/old_facility_1.jpeg";
const gymBefore1 = "/src/assets/images/old_facility_2.jpeg";

export const projects = [
  {
    id: 1,
    title: "Community Gymnasium",
    slug: slugify("Community Gymnasium"),
    category: "Infrastructure",
    image: gymImage,
    shortDescription:
      "State-of-the-art fitness facility serving over 2,000 community members",
    fullDescription:
      "We built a modern gymnasium facility in Polonnaruwa District, providing free access to fitness equipment and health programs for the local community. This project has transformed the health and wellness of over 5,000 residents by fostering a culture of fitness and discipline. Sports play a vital role in helping young people in their day-to-day lives, especially with their discipline, mental sharpness, and physicality. These qualities guide them in becoming balanced individuals. Students who are involved in sports become confident adults. Not every individual can achieve this; the DishDiya Foundation is helping bridge this gap by establishing this facility. Specifically, we are building a new Weight Lifting Training Center in Sevanapitiya, Welikanda Division, Polonnaruwa, with the primary beneficiaries being the student athletes of Sevanapitiya Maha Vidyalaya.",
    problem:
      "Limited access to fitness facilities and rising health issues in the community, particularly among youth, have hindered physical development and discipline.",
    solution:
      "A fully-equipped gymnasium with professional trainers, health education programs, and specialized weight-lifting training tailored for student athletes.",
    impact:
      "2,000+ beneficiaries, 40% reduction in obesity rates, youth sports programs established, and enhanced confidence and discipline among Sevanapitiya Maha Vidyalaya student athletes.",
    documents: [
      {
        name: "Project Proposal",
        path: "/src/assets/pdf/Project Proposal.pdf",
      },
      {
        name: "Scanned Document",
        path: "/src/assets/pdf/IMG_20190322_0001.pdf",
      },
    ],
    timeline: [
      {
        date: "2023-01-01",
        description: "Project planning and blueprint design",
      },
      { date: "2023-03-01", description: "Foundation construction begins" },
      {
        date: "2023-06-01",
        description: "Erection of concrete walls and structure",
      },
      {
        date: "2023-09-01",
        description: "Roof construction with SL Army assistance",
      },
      {
        date: "2023-12-01",
        description: "Interior finishing and equipment installation",
      },
      {
        date: "2024-01-01",
        description: "Opening ceremony and facility launch",
      },
    ],
    stages: [
      {
        title: "Before the Project",
        description:
          "The community, especially the youth of Sevanapitiya Maha Vidyalaya, lacked proper fitness facilities, leading to rising health issues and limited opportunities for sports development.",
        images: [gymBefore1, gymBefore2],
      },
      {
        title: "Planning and Blueprints",
        description:
          "Detailed planning included designing blueprints and obtaining legal approvals to ensure a safe and functional weight-lifting center for student athletes. This stage involved collaboration with local authorities and reviewing project proposals.",
        images: [
          "/src/assets/images/building_plan_1.png",
          "/src/assets/images/blueprint_1.png",
          "/src/assets/images/blueprint_2.png",
          "/src/assets/images/blueprint_3.png",
        ],
      },
      {
        title: "Foundation Stage",
        description:
          "Construction began with laying a solid foundation to support the gymnasium’s heavy equipment and training areas. Early site preparation and initial brickwork were critical.",
        images: [
          "/src/assets/images/foundation_1.jpg",
          "/src/assets/images/foundation_2.jpeg",
        ],
      },
      {
        title: "Walls and Structure",
        description:
          "Building the concrete walls and main structure to create a durable and spacious training environment. This phase focused on structural integrity.",
        images: [
          "/src/assets/images/walls_1.jpg",
          "/src/assets/images/walls_2.jpeg",
          "/src/assets/images/walls_3.jpeg",
        ],
      },
      {
        title: "Roof with SL Army Help",
        description:
          "The Sri Lankan Army provided critical support in constructing a robust roof, ensuring the facility could withstand local weather conditions.",
        images: [
          "/src/assets/images/roof_1.jpeg",
          "/src/assets/images/roof_2.jpeg",
          "/src/assets/images/roof_3.jpeg",
        ],
      },
      {
        title: "Opening Ceremony",
        description:
          "The grand opening featured a ribbon-cutting ceremony, attended by local leaders, students, and community members, marking the start of community fitness programs.",
        images: [
          "/src/assets/images/opening_2 (7).jpeg",
          "/src/assets/images/opening_2 (2).jpeg",
          "/src/assets/images/opening_2 (1).jpeg",
          "/src/assets/images/opening_2 (3).jpeg",
          "/src/assets/images/opening_2 (4).jpeg",
          "/src/assets/images/opening_2 (5).jpeg",
          "/src/assets/images/opening_2 (6).jpeg",
          "/src/assets/images/opening_2 (8).jpeg",
        ],
      },
      {
        title: "Post-Opening Activities",
        description:
          "Students from Sevanapitiya Maha Vidyalaya began using the facility, with weight-lifting programs boosting their physical and mental resilience. Images show children engaging in weight lifting and other activities.",
        images: [
          "/src/assets/images/post_opening_ (4).jpeg",
          "/src/assets/images/post_opening_ (2).jpeg",
          "/src/assets/images/post_opening_ (3).jpeg",
          "/src/assets/images/post_opening_ (1).jpeg",
        ],
      },
    ],
  },
];
