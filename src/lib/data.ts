// lib/courses-data.ts

export interface Course {
  id: string; // Unique slug for URL (e.g., "software-fundamentals")
  title: string; // Display title
  subtitle: string; // Tagline or secondary title
  description: string; // Short marketing description
  details: string; // Summary string shown in cards (e.g., "5 Chapters | 50+ Topics...")
  cta: string; // Call-to-action button text (e.g., "Enroll Now")
  href: string; // Link to course page
  curriculumHref: string; // Anchor link to curriculum section
  imageSrc: string; // Path to course image

  // Extended details for course detail page
  duration: string; // e.g., "4 Weeks"
  level: string; // e.g., "Beginner to Intermediate"
  language: string; // e.g., "Hindi (with English Subtitles)"
  certificate: string; // e.g., "Yes, upon completion"
  price: string; // e.g., "₹4,999"

  toolsCovered: string[]; // List of tools taught
  outcomes: string[]; // List of learning outcomes
  curriculum: Array<{
    chapter?: string; // For chapter-based courses
    module?: string; // For module-based courses (like Power of Three)
    description?: string; // Optional summary for modules
    topics?: string[]; // List of topics (optional if description is used)
  }>;

  prerequisites: string; // Prerequisite description
}

export const courses: Course[] = [
  {
    id: "software-fundamentals",
    title: "Software Masterclass",
    subtitle: "The Ultimate Guide",
    description:
      "The essential course every mobile repair technician must master. Build a strong foundation in software repair before advancing to eMMC and UFS programming.",
    details: "5 Chapters | 50+ Topics | 4 Chipset Brands | Easy Hindi Language",
    cta: "Enroll Now",
    href: "/courses/software-fundamentals",
    curriculumHref: "/courses/software-fundamentals#curriculum",
    imageSrc: "/software.png",
    duration: "4 Weeks",
    level: "Beginner to Intermediate",
    language: "Hindi (with English Subtitles)",
    certificate: "Yes, upon completion",
    price: "₹4,999",
    toolsCovered: ["Flash F64", "UMT Tool", "Pandora", "EasyJTAG Plus"],
    outcomes: [
      "Flash firmware on any Android device",
      "Bypass FRP locks on Samsung, Xiaomi, Oppo, Vivo",
      "Fix bootloop, stuck logo, and IMEI issues",
      "Master ADB, Fastboot, and EDL Mode",
    ],
    curriculum: [
      {
        chapter: "Chapter 1: Introduction to Mobile Software",
        topics: [
          "Understanding Bootloaders & Recovery",
          "ADB & Fastboot Basics",
          "Introduction to Flash Tools",
        ],
      },
      {
        chapter: "Chapter 2: Android Firmware Flashing",
        topics: [
          "Stock ROM Download & Installation",
          "Scatter File & PAC File Flashing",
          "OnePlus, Pixel, and Generic Android",
        ],
      },
      {
        chapter: "Chapter 3: FRP & Pattern Lock Bypass",
        topics: [
          "Samsung FRP Bypass (All Methods)",
          "Xiaomi/Oppo/Vivo FRP Removal",
          "Using Combination Files & Test Points",
        ],
      },
      {
        chapter: "Chapter 4: Qualcomm & MediaTek Deep Dive",
        topics: [
          "EDL Mode Unlocking",
          "Authorized & Unauthorized Flashing",
          "Firehose & QPST Tools",
        ],
      },
      {
        chapter: "Chapter 5: Advanced Troubleshooting",
        topics: [
          "Fixing IMEI Null/Invalid",
          "Baseband & Signal Issues",
          "NV Data & EFS Backup/Restore",
        ],
      },
    ],
    prerequisites:
      "Basic computer knowledge. No prior repair experience needed.",
  },
  {
    id: "emmc-ufs-mastery",
    title: "eMMC & UFS Repair",
    subtitle: "Mastery Course",
    description:
      "Advanced chip-level training for technicians ready to master storage chip repair, data recovery, and replacement techniques.",
    details: "5 Chapters | 60+ Topics | 2 Tools Mastered | Easy Hindi Language",
    cta: "Enroll Now",
    href: "/courses/emmc-ufs-mastery",
    curriculumHref: "/courses/emmc-ufs-mastery#curriculum",
    imageSrc: "/eMMC.png",
    duration: "6 Weeks",
    level: "Intermediate to Advanced",
    language: "Hindi (with English Subtitles)",
    certificate: "Yes, upon completion",
    price: "₹7,999",
    toolsCovered: ["MIPITESTER", "RX PRO", "EasyJTAG Plus", "PC-3000 Flash"],
    outcomes: [
      "Identify and replace eMMC/UFS chips",
      "Recover data from dead motherboards",
      "Repair corrupted partitions and filesystems",
      "Master ISP/JTAG/Box Method data extraction",
    ],
    curriculum: [
      {
        chapter: "Chapter 1: Understanding Storage Chips",
        topics: [
          "eMMC vs UFS Architecture",
          "Reading Datasheets & Pinouts",
          "Identifying Chips on Board",
        ],
      },
      {
        chapter: "Chapter 2: Tools & Equipment Setup",
        topics: [
          "MIPITESTER Setup & Calibration",
          "RX PRO for UFS Read/Write",
          "Adapter Boards & Soldering Jigs",
        ],
      },
      {
        chapter: "Chapter 3: Data Extraction Techniques",
        topics: [
          "ISP Method for eMMC",
          "Direct Read via MIPITESTER",
          "JTAG for Qualcomm Devices",
        ],
      },
      {
        chapter: "Chapter 4: Chip Replacement & Reballing",
        topics: [
          "Hot Air Rework Station Techniques",
          "Preheating & Temperature Profiles",
          "Solder Paste & Stencil Usage",
        ],
      },
      {
        chapter: "Chapter 5: Advanced Data Recovery",
        topics: [
          "Repairing Corrupted Filesystems",
          "Partition Table Reconstruction",
          "User Data Extraction & Backup",
        ],
      },
    ],
    prerequisites:
      "Completion of Software Masterclass or equivalent knowledge.",
  },
  {
    id: "power-of-three",
    title: "The Power of Three",
    subtitle: "Complete Mobile Repair Mastery",
    description:
      "Master Software Fundamentals, eMMC, and UFS repair - all three essential skills in one comprehensive program.",
    details: "4 Modules | 100+ Topics | 3 Courses in One | Easy Hindi Language",
    cta: "Enroll Now",
    href: "/courses",
    curriculumHref: "/courses#curriculum",
    imageSrc: "/power.png",
    duration: "12 Weeks",
    level: "Beginner to Expert",
    language: "Hindi (with English Subtitles)",
    certificate: "Yes, upon completion + Master Technician Badge",
    price: "₹11,999 (Save ₹999)",
    toolsCovered: [
      "Flash F64",
      "UMT Tool",
      "Pandora",
      "EasyJTAG Plus",
      "MIPITESTER",
      "RX PRO",
    ],
    outcomes: [
      "Full software & hardware repair mastery",
      "Ability to recover data from any dead device",
      "Start your own repair shop or freelance confidently",
      "Earn industry-recognized Master Technician certification",
    ],
    curriculum: [
      {
        module: "Module 1: Software Masterclass (4 Weeks)",
        description: "Covers all fundamentals from flashing to FRP bypass.",
      },
      {
        module: "Module 2: eMMC & UFS Repair (6 Weeks)",
        description: "Deep dive into chip-level repair and data recovery.",
      },
      {
        module: "Module 3: Business & Client Management",
        topics: [
          "Pricing Your Services",
          "Customer Communication",
          "Warranty & Ethical Practices",
          "Marketing Your Repair Business",
        ],
      },
      {
        module: "Module 4: Capstone Projects & Certification",
        topics: [
          "Real-World Repair Challenges",
          "Data Recovery Simulations",
          "Final Exam & Live Demo",
          "Certificate & Badge Issuance",
        ],
      },
    ],
    prerequisites: "None. Designed for absolute beginners.",
  },
] as const satisfies Course[];
