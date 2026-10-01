/**
 * PlaceNexus - Student Placement Portal
 * Core Application Engine with White Background & Coloured Columns
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Initial State & Seed Data
  // --------------------------------------------------------------------------
  const STORAGE_KEY = 'placenexus_state_v1';

  // Available Certifications Catalog
  const ALL_CERT_OPTIONS = [
    'AWS Certified Solutions Architect',
    'AWS Certified Cloud Practitioner',
    'Google Professional Data Engineer',
    'Google Data Analytics Professional',
    'Meta React Native Specialist',
    'Meta Front-End Developer',
    'Cisco CCNA Routing & Switching',
    'Docker & Kubernetes (CKA)',
    'CompTIA Security+ Certified',
    'Microsoft Azure Fundamentals (AZ-900)',
    'Oracle Certified Java Developer'
  ];

  // Default Student Placement Profile
  const DEFAULT_STUDENT_PROFILE = {
    name: 'Alexandria Chen',
    rollNo: '22CS1048',
    department: 'Computer Science (CSE)',
    gradYear: '2026',
    cgpa: 8.8,
    backlogs: 0,
    certifications: [
      {
        id: 'cert-1',
        title: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services (AWS)',
        date: '2025-05',
        credId: 'AWS-ARCH-99214'
      },
      {
        id: 'cert-2',
        title: 'Meta Front-End Developer',
        issuer: 'Meta / Coursera',
        date: '2025-02',
        credId: 'META-FE-55410'
      },
      {
        id: 'cert-3',
        title: 'Google Data Analytics Professional',
        issuer: 'Google Cloud (GCP)',
        date: '2024-11',
        credId: 'GCP-DA-77123'
      },
      {
        id: 'cert-4',
        title: 'Docker & Kubernetes (CKA)',
        issuer: 'Linux Foundation (CKA/CKAD)',
        date: '2025-07',
        credId: 'LF-CKA-88203'
      }
    ]
  };

  // Seed Campus Jobs
  const INITIAL_JOBS = [
    {
      id: 'job-1',
      company: 'Microsoft India',
      title: 'Software Development Engineer - Cloud & AI',
      initials: 'MS',
      logoBg: 'linear-gradient(135deg, #0078d4, #00a4ef)',
      category: 'Cloud & DevOps',
      packageLPA: 28.5,
      baseLPA: 18.0,
      bonusLPA: 5.5,
      location: 'Bengaluru / Hyderabad (Hybrid)',
      minCGPA: 8.0,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)'],
      maxBacklogs: 0,
      requiredCerts: ['AWS Certified Solutions Architect', 'Docker & Kubernetes (CKA)'],
      recommendedCerts: ['Microsoft Azure Fundamentals (AZ-900)'],
      deadline: '2026-10-15',
      desc: 'Join Microsoft Azure Core Engineering team to design scalable distributed services, telemetry pipelines, and cloud native architectures handling billions of events daily.',
      rounds: ['Online Coding Assessment', 'Technical Round 1 (DSA)', 'Technical Round 2 (System Design)', 'AA / HR Interview']
    },
    {
      id: 'job-2',
      company: 'Google Cloud',
      title: 'Cloud Associate Systems Engineer',
      initials: 'GO',
      logoBg: 'linear-gradient(135deg, #ea4335, #4285f4)',
      category: 'Cloud & DevOps',
      packageLPA: 38.0,
      baseLPA: 22.0,
      bonusLPA: 8.0,
      location: 'Bengaluru / Hyderabad',
      minCGPA: 8.5,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)'],
      maxBacklogs: 0,
      requiredCerts: ['Docker & Kubernetes (CKA)', 'Google Professional Data Engineer'],
      recommendedCerts: ['AWS Certified Solutions Architect'],
      deadline: '2026-10-18',
      desc: 'Develop mission-critical cloud infrastructure, distributed microservices, and Kubernetes automation engines for Google Cloud customers.',
      rounds: ['Google Online Challenge', 'Technical Interview 1', 'Technical Interview 2', 'Googliness & Leadership']
    },
    {
      id: 'job-3',
      company: 'Goldman Sachs',
      title: 'Quantitative & Core Platform Analyst',
      initials: 'GS',
      logoBg: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
      category: 'Software Engineering',
      packageLPA: 32.0,
      baseLPA: 21.0,
      bonusLPA: 6.0,
      location: 'Bengaluru',
      minCGPA: 8.2,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)', 'Electrical Engineering (EEE)'],
      maxBacklogs: 0,
      requiredCerts: ['Oracle Certified Java Developer'],
      recommendedCerts: ['Google Data Analytics Professional'],
      deadline: '2026-10-22',
      desc: 'Build high-throughput, low-latency financial trading platforms, order management systems, and risk calculation microservices in Java and C++.',
      rounds: ['HackerRank Coding Test', 'Maths & Quantitative Round', 'Technical System Round', 'Managing Director Interview']
    },
    {
      id: 'job-4',
      company: 'Cisco Systems',
      title: 'Network & Cloud Security Engineer',
      initials: 'CS',
      logoBg: 'linear-gradient(135deg, #00bceb, #005073)',
      category: 'Cybersecurity',
      packageLPA: 24.5,
      baseLPA: 16.5,
      bonusLPA: 4.0,
      location: 'Bengaluru / Chennai',
      minCGPA: 7.5,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)'],
      maxBacklogs: 0,
      requiredCerts: ['Cisco CCNA Routing & Switching'],
      recommendedCerts: ['CompTIA Security+ Certified'],
      deadline: '2026-10-28',
      desc: 'Work on enterprise software defined networking (SDN), zero-trust network access (ZTNA), and secure cloud gateways.',
      rounds: ['Cognitive & Coding Round', 'Technical Networking Round', 'Cybersecurity Deep-Dive', 'HR Managerial Round']
    },
    {
      id: 'job-5',
      company: 'Atlassian',
      title: 'Fullstack Software Engineer (Jira & Confluence)',
      initials: 'AT',
      logoBg: 'linear-gradient(135deg, #0052cc, #2684ff)',
      category: 'Fullstack & Web',
      packageLPA: 42.0,
      baseLPA: 24.0,
      bonusLPA: 9.0,
      location: 'Bengaluru (Remote Allowed)',
      minCGPA: 8.0,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)', 'Data Science & AI'],
      maxBacklogs: 0,
      requiredCerts: ['Meta Front-End Developer'],
      recommendedCerts: ['Docker & Kubernetes (CKA)'],
      deadline: '2026-10-30',
      desc: 'Build collaboration software used by millions of agile teams globally. Develop high-performance React frontends, Node/Java microservices, and GraphQL APIs.',
      rounds: ['Design & Coding Challenge', 'Data Structures Interview', 'System Design Round', 'Values & Team Fit']
    },
    {
      id: 'job-6',
      company: 'Amazon Web Services',
      title: 'Cloud Support Associate / Dev Solutions',
      initials: 'AWS',
      logoBg: 'linear-gradient(135deg, #ff9900, #232f3e)',
      category: 'Cloud & DevOps',
      packageLPA: 22.0,
      baseLPA: 15.0,
      bonusLPA: 4.5,
      location: 'Hyderabad / Pune',
      minCGPA: 7.0,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)', 'Electrical Engineering (EEE)', 'Mechanical Engineering (MECH)'],
      maxBacklogs: 1,
      requiredCerts: ['AWS Certified Solutions Architect'],
      recommendedCerts: ['AWS Certified Cloud Practitioner'],
      deadline: '2026-11-05',
      desc: 'Architect cloud troubleshooting workflows, advise enterprise customers on deploying EC2, EKS, RDS, and Lambda serverless workloads securely.',
      rounds: ['Amazon Assessment', 'Technical Deep Dive 1', 'Technical Deep Dive 2', 'Bar Raiser Round']
    },
    {
      id: 'job-7',
      company: 'Deloitte Consulting',
      title: 'Analytics & Cognitive Technology Consultant',
      initials: 'DT',
      logoBg: 'linear-gradient(135deg, #86bc25, #000000)',
      category: 'Data & AI',
      packageLPA: 14.5,
      baseLPA: 11.5,
      bonusLPA: 2.0,
      location: 'Mumbai / Gurugram',
      minCGPA: 6.8,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)', 'Mechanical Engineering (MECH)'],
      maxBacklogs: 0,
      requiredCerts: ['Google Data Analytics Professional'],
      recommendedCerts: ['Microsoft Azure Fundamentals (AZ-900)'],
      deadline: '2026-11-10',
      desc: 'Transform enterprise clients using big data, business intelligence dashboards (PowerBI, Tableau), predictive machine learning pipelines, and cloud migrations.',
      rounds: ['Aptitude & Logical Round', 'Case Study Round', 'Partner Tech Interview', 'HR Discussion']
    },
    {
      id: 'job-8',
      company: 'Zomato & Blinkit',
      title: 'Backend Software Development Engineer',
      initials: 'ZM',
      logoBg: 'linear-gradient(135deg, #e23744, #cb202d)',
      category: 'Software Engineering',
      packageLPA: 26.0,
      baseLPA: 18.0,
      bonusLPA: 4.0,
      location: 'Gurugram',
      minCGPA: 7.2,
      allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)'],
      maxBacklogs: 0,
      requiredCerts: ['Docker & Kubernetes (CKA)'],
      recommendedCerts: ['Meta Front-End Developer'],
      deadline: '2026-11-12',
      desc: 'Power 10-minute instant delivery infrastructure with Golang/Python microservices, Kafka streaming pipelines, and Redis caching layers.',
      rounds: ['Online Machine Coding', 'DSA & Problem Solving', 'Architecture & Concurrency', 'Culture Round']
    }
  ];

  // Default Applied Jobs (seed with some active in-progress and cracked interview)
  const INITIAL_APPLICATIONS = [
    {
      jobId: 'job-1', // Microsoft India
      appliedDate: '2026-09-12',
      currentStageIndex: 3, // All rounds cleared
      status: 'Cracked',
      statusText: 'Placement Offer Extended! (Cracked)',
      cracked: true,
      offerDetails: {
        ctc: 28.5,
        base: 18.0,
        bonus: 5.5,
        accepted: true,
        acceptedDate: '2026-09-24',
        location: 'Bengaluru / Hyderabad (Hybrid)'
      },
      nextStep: 'Congratulations! Official Offer Letter Accepted.'
    },
    {
      jobId: 'job-5', // Atlassian
      appliedDate: '2026-09-18',
      currentStageIndex: 3, // All rounds cleared
      status: 'Cracked',
      statusText: 'Dream Offer Extended! (Cracked)',
      cracked: true,
      offerDetails: {
        ctc: 42.0,
        base: 24.0,
        bonus: 9.0,
        accepted: false,
        acceptedDate: null,
        location: 'Bengaluru (Remote Allowed)'
      },
      nextStep: 'Offer Letter Pending Review. Deadline: Oct 10, 2026.'
    },
    {
      jobId: 'job-6', // AWS
      appliedDate: '2026-09-22',
      currentStageIndex: 2, // Technical Deep Dive 2
      status: 'Interview',
      statusText: 'Technical Deep Dive Round 2 Scheduled',
      cracked: false,
      offerDetails: null,
      nextStep: 'Interview on Oct 4, 2026 at 3:00 PM (Amazon Chime)'
    },
    {
      jobId: 'job-7', // Deloitte
      appliedDate: '2026-09-25',
      currentStageIndex: 1, // Case Study
      status: 'Screening',
      statusText: 'Online Assessment Cleared - Case Study Pending',
      cracked: false,
      offerDetails: null,
      nextStep: 'Case Study submission due Oct 8, 2026'
    }
  ];

  // Scheduled Interviews
  const INITIAL_SCHEDULED_INTERVIEWS = [
    {
      id: 'int-1',
      jobId: 'job-6',
      company: 'Amazon Web Services',
      role: 'Cloud Support Associate',
      round: 'Technical Deep Dive - Systems & VPC Networks',
      day: '04',
      month: 'OCT',
      time: '03:00 PM IST',
      interviewer: 'Raghav Sharma (Senior Cloud Architect)',
      platform: 'Amazon Chime',
      status: 'Scheduled'
    },
    {
      id: 'int-2',
      jobId: 'job-7',
      company: 'Deloitte Consulting',
      role: 'Technology Consultant',
      round: 'Data Architecture & Client Case Study Round',
      day: '08',
      month: 'OCT',
      time: '11:30 AM IST',
      interviewer: 'Priya Nambiar (Director of Analytics)',
      platform: 'Microsoft Teams',
      status: 'Scheduled'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Application State Singleton
  // --------------------------------------------------------------------------
  class PlacementStore {
    constructor() {
      this.load();
    }

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          this.student = parsed.student || DEFAULT_STUDENT_PROFILE;
          this.jobs = parsed.jobs || INITIAL_JOBS;
          this.applied = parsed.applied || INITIAL_APPLICATIONS;
          this.interviews = parsed.interviews || INITIAL_SCHEDULED_INTERVIEWS;
          return;
        }
      } catch (e) {
        console.error('Error loading placement state:', e);
      }
      this.student = JSON.parse(JSON.stringify(DEFAULT_STUDENT_PROFILE));
      this.jobs = JSON.parse(JSON.stringify(INITIAL_JOBS));
      this.applied = JSON.parse(JSON.stringify(INITIAL_APPLICATIONS));
      this.interviews = JSON.parse(JSON.stringify(INITIAL_SCHEDULED_INTERVIEWS));
      this.save();
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          student: this.student,
          jobs: this.jobs,
          applied: this.applied,
          interviews: this.interviews
        }));
      } catch (e) {
        console.error('Failed to save placement state:', e);
      }
    }

    getStudentCertNames() {
      return this.student.certifications.map(c => c.title.toLowerCase().trim());
    }

    hasCertification(certTitle) {
      const needle = certTitle.toLowerCase().trim();
      return this.getStudentCertNames().includes(needle);
    }

    evaluateEligibility(job) {
      const student = this.store ? this.store.student : this.student;
      const reasons = [];
      const studentCerts = this.getStudentCertNames();

      // 1. CGPA Criterion
      const cgpaOk = (student.cgpa >= job.minCGPA);
      if (!cgpaOk) {
        reasons.push(`Minimum CGPA required is ${job.minCGPA.toFixed(1)} (Your CGPA: ${student.cgpa.toFixed(1)})`);
      }

      // 2. Branch / Department Criterion
      const branchOk = job.allowedBranches.includes('All') || 
                       job.allowedBranches.includes(student.department);
      if (!branchOk) {
        reasons.push(`Branch restricted to: ${job.allowedBranches.join(', ')}`);
      }

      // 3. Backlog Criterion
      const backlogOk = (student.backlogs <= job.maxBacklogs);
      if (!backlogOk) {
        reasons.push(`Company requires ≤ ${job.maxBacklogs} backlogs (You have ${student.backlogs})`);
      }

      // 4. Certifications Match Check
      const certsMatched = [];
      const certsMissing = [];

      (job.requiredCerts || []).forEach(reqCert => {
        const hasIt = studentCerts.includes(reqCert.toLowerCase().trim());
        if (hasIt) {
          certsMatched.push(reqCert);
        } else {
          certsMissing.push(reqCert);
        }
      });

      const certsOk = (certsMissing.length === 0);
      if (!certsOk) {
        reasons.push(`Missing mandatory certification(s): ${certsMissing.join(', ')}`);
      }

      // Calculate Application Status
      const isApplied = this.applied.some(app => app.jobId === job.id);
      const application = this.applied.find(app => app.jobId === job.id);
      const isCracked = application ? Boolean(application.cracked) : false;

      // Status resolution
      let status = 'ELIGIBLE';
      if (!cgpaOk || !branchOk || !backlogOk) {
        status = 'INELIGIBLE';
      } else if (!certsOk) {
        status = 'PARTIAL'; // CGPA and branch pass, but missing mandatory certs
      }

      // Match Score Percentage (0 - 100)
      let matchScore = 100;
      if (!cgpaOk) matchScore -= 40;
      if (!branchOk) matchScore -= 35;
      if (!backlogOk) matchScore -= 20;
      if (job.requiredCerts && job.requiredCerts.length > 0) {
        const certRatio = certsMatched.length / job.requiredCerts.length;
        matchScore = Math.max(20, Math.round(matchScore * (0.6 + 0.4 * certRatio)));
      }

      return {
        status, // 'ELIGIBLE' | 'PARTIAL' | 'INELIGIBLE'
        isEligible: (status === 'ELIGIBLE'),
        isPartial: (status === 'PARTIAL'),
        isIneligible: (status === 'INELIGIBLE'),
        cgpaOk,
        branchOk,
        backlogOk,
        certsOk,
        certsMatched,
        certsMissing,
        reasons,
        matchScore,
        isApplied,
        isCracked,
        application
      };
    }

    applyForJob(jobId) {
      if (this.applied.some(a => a.jobId === jobId)) {
        return { success: false, message: 'You have already applied for this campus drive.' };
      }

      const job = this.jobs.find(j => j.id === jobId);
      if (!job) return { success: false, message: 'Job not found.' };

      const newApp = {
        jobId: job.id,
        appliedDate: new Date().toISOString().split('T')[0],
        currentStageIndex: 0,
        status: 'Screening',
        statusText: 'Application Submitted & Profile Under Review',
        cracked: false,
        offerDetails: null,
        nextStep: 'Resume and Certification verification by TPO & Recruiter'
      };

      this.applied.unshift(newApp);
      this.save();
      return { success: true, message: `Successfully applied to ${job.company}!` };
    }

    advanceApplication(jobId) {
      const app = this.applied.find(a => a.jobId === jobId);
      const job = this.jobs.find(j => j.id === jobId);
      if (!app || !job) return;

      const totalRounds = job.rounds.length;
      if (app.currentStageIndex < totalRounds - 1) {
        app.currentStageIndex += 1;
        const currentRoundName = job.rounds[app.currentStageIndex];
        
        if (app.currentStageIndex === totalRounds - 1) {
          app.status = 'Interview';
          app.statusText = `Final Round: ${currentRoundName}`;
          app.nextStep = 'Prepare for HR and leadership cultural interview!';
        } else {
          app.status = 'Interview';
          app.statusText = `Round ${app.currentStageIndex + 1}: ${currentRoundName}`;
          app.nextStep = `Clear the ${currentRoundName} assessment.`;
        }
      } else {
        // Mark as cracked / offered!
        app.status = 'Cracked';
        app.statusText = 'Placement Offer Extended! (Cracked) 🎉';
        app.cracked = true;
        app.offerDetails = {
          ctc: job.packageLPA,
          base: job.baseLPA || (job.packageLPA * 0.7).toFixed(1),
          bonus: job.bonusLPA || (job.packageLPA * 0.15).toFixed(1),
          accepted: false,
          acceptedDate: null,
          location: job.location
        };
        app.nextStep = 'Review and accept your official placement offer!';
      }

      this.save();
    }

    acceptOffer(jobId) {
      const app = this.applied.find(a => a.jobId === jobId);
      if (app && app.offerDetails) {
        app.offerDetails.accepted = true;
        app.offerDetails.acceptedDate = new Date().toISOString().split('T')[0];
        this.save();
        return true;
      }
      return false;
    }

    addCertification(certData) {
      const newCert = {
        id: 'cert-' + Date.now(),
        title: certData.title.trim(),
        issuer: certData.issuer,
        date: certData.date,
        credId: certData.credId.trim()
      };
      this.student.certifications.push(newCert);
      this.save();
      return newCert;
    }

    removeCertification(certId) {
      this.student.certifications = this.student.certifications.filter(c => c.id !== certId);
      this.save();
    }

    addJob(jobData) {
      const newJob = {
        id: 'job-' + Date.now(),
        company: jobData.company,
        title: jobData.title,
        initials: jobData.company.substring(0, 2).toUpperCase(),
        logoBg: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        category: jobData.category,
        packageLPA: parseFloat(jobData.packageLPA),
        baseLPA: (parseFloat(jobData.packageLPA) * 0.72).toFixed(1),
        bonusLPA: (parseFloat(jobData.packageLPA) * 0.18).toFixed(1),
        location: 'Bengaluru / Hybrid',
        minCGPA: parseFloat(jobData.minCGPA),
        allowedBranches: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Communication (ECE)'],
        maxBacklogs: 0,
        requiredCerts: jobData.requiredCerts,
        recommendedCerts: [],
        deadline: jobData.deadline,
        desc: jobData.desc,
        rounds: ['Coding Challenge', 'Technical Interview 1', 'Technical System Round', 'HR & Offer']
      };

      this.jobs.unshift(newJob);
      this.save();
      return newJob;
    }

    updateStudentProfile(data) {
      this.student.name = data.name;
      this.student.rollNo = data.rollNo;
      this.student.department = data.department;
      this.student.gradYear = data.gradYear;
      this.student.cgpa = parseFloat(data.cgpa);
      this.student.backlogs = parseInt(data.backlogs, 10);
      
      // Update selected certifications from profile checkboxes
      if (Array.isArray(data.selectedCertTitles)) {
        const updated = [];
        data.selectedCertTitles.forEach((title, idx) => {
          const existing = this.student.certifications.find(c => c.title.toLowerCase() === title.toLowerCase());
          if (existing) {
            updated.push(existing);
          } else {
            updated.push({
              id: 'cert-gen-' + idx + '-' + Date.now(),
              title: title,
              issuer: 'Verified Industry Academy',
              date: '2025-06',
              credId: 'NX-VERIFIED-' + Math.floor(100000 + Math.random() * 900000)
            });
          }
        });
        this.student.certifications = updated;
      }

      this.save();
    }
  }

  // --------------------------------------------------------------------------
  // 3. UI Controller & Renderer
  // --------------------------------------------------------------------------
  class PlacementApp {
    constructor() {
      this.store = new PlacementStore();
      this.currentView = 'jobs';
      this.activeModal = null;
      this.selectedJobForModal = null;

      // Filter states
      this.filters = {
        search: '',
        category: 'all',
        minPackage: 0,
        sortBy: 'deadline',
        eligibleOnly: false,
        appliedTab: 'all'
      };

      this.initDomReferences();
      this.attachEventListeners();
      this.renderAll();
    }

    initDomReferences() {
      // Sidebar elements
      this.sidebar = document.getElementById('sidebar');
      this.sidebarStudentName = document.getElementById('sidebar-student-name');
      this.sidebarStudentMeta = document.getElementById('sidebar-student-meta');
      this.sidebarCgpa = document.getElementById('sidebar-cgpa');
      this.sidebarCertCount = document.getElementById('sidebar-cert-count');
      this.navBadgeJobs = document.getElementById('nav-badge-jobs');
      this.navBadgeApplied = document.getElementById('nav-badge-applied');
      this.navBadgeCracked = document.getElementById('nav-badge-cracked');
      this.navBadgeCerts = document.getElementById('nav-badge-certs');

      // KPIs (4 Coloured Columns)
      this.kpiTotalJobs = document.getElementById('kpi-total-jobs');
      this.kpiEligibleJobs = document.getElementById('kpi-eligible-jobs');
      this.kpiEligibilityRate = document.getElementById('kpi-eligibility-rate');
      this.kpiAppliedJobs = document.getElementById('kpi-applied-jobs');
      this.kpiCrackedOffers = document.getElementById('kpi-cracked-offers');
      this.kpiHighestPackage = document.getElementById('kpi-highest-package');
      this.summaryEligibleCount = document.getElementById('summary-eligible-count');

      // Criteria Banner
      this.bannerCgpa = document.getElementById('banner-cgpa');
      this.bannerBranch = document.getElementById('banner-branch');
      this.bannerBacklogs = document.getElementById('banner-backlogs');
      this.bannerCerts = document.getElementById('banner-certs');

      // Job board (Coloured Columns & Grid)
      this.jobsColumnsContainer = document.getElementById('jobs-columns-container');
      this.cardsColEligible = document.getElementById('cards-col-eligible');
      this.cardsColPartial = document.getElementById('cards-col-partial');
      this.cardsColIneligible = document.getElementById('cards-col-ineligible');
      this.countColEligible = document.getElementById('count-col-eligible');
      this.countColPartial = document.getElementById('count-col-partial');
      this.countColIneligible = document.getElementById('count-col-ineligible');
      this.btnLayoutColumns = document.getElementById('btn-layout-columns');
      this.btnLayoutGrid = document.getElementById('btn-layout-grid');

      this.jobsContainer = document.getElementById('jobs-cards-container');
      this.jobsCountDisplay = document.getElementById('jobs-count-display');
      this.jobsEmptyState = document.getElementById('jobs-empty-state');
      this.searchInput = document.getElementById('job-search-input');
      this.btnClearSearch = document.getElementById('btn-clear-search');
      this.filterCategory = document.getElementById('filter-category');
      this.filterPackage = document.getElementById('filter-package');
      this.filterSort = document.getElementById('filter-sort');
      this.toggleEligibleOnly = document.getElementById('toggle-eligible-only');
      this.activeFilterTags = document.getElementById('active-filter-tags');

      // Applied tab (Coloured Kanban Columns & Timeline)
      this.appliedKanbanContainer = document.getElementById('applied-kanban-container');
      this.cardsKanbanScreening = document.getElementById('cards-kanban-screening');
      this.cardsKanbanInterview = document.getElementById('cards-kanban-interview');
      this.cardsKanbanCracked = document.getElementById('cards-kanban-cracked');
      this.countKanbanScreening = document.getElementById('count-kanban-screening');
      this.countKanbanInterview = document.getElementById('count-kanban-interview');
      this.countKanbanCracked = document.getElementById('count-kanban-cracked');
      this.btnAppliedKanban = document.getElementById('btn-applied-kanban');
      this.btnAppliedStepper = document.getElementById('btn-applied-stepper');

      this.appliedContainer = document.getElementById('applied-cards-container');
      this.appliedEmptyState = document.getElementById('applied-empty-state');
      this.appliedTabAll = document.getElementById('applied-tab-all');
      this.appliedTabScreening = document.getElementById('applied-tab-screening');
      this.appliedTabInterview = document.getElementById('applied-tab-interview');
      this.appliedTabCracked = document.getElementById('applied-tab-cracked');

      // Cracked Hero & Offers
      this.crackedCountHero = document.getElementById('cracked-count-hero');
      this.crackedHighestHero = document.getElementById('cracked-highest-hero');
      this.crackedAvgHero = document.getElementById('cracked-avg-hero');
      this.crackedOffersContainer = document.getElementById('cracked-offers-container');
      this.interviewsScheduleContainer = document.getElementById('interviews-schedule-container');

      // Certifications Hub
      this.userCertCount = document.getElementById('user-cert-count');
      this.studentCertsContainer = document.getElementById('student-certs-container');
      this.demandCertsContainer = document.getElementById('demand-certs-container');

      // Modals
      this.jobDetailsModal = document.getElementById('job-details-modal');
      this.studentProfileModal = document.getElementById('student-profile-modal');
      this.addCertModal = document.getElementById('add-cert-modal');
      this.postJobModal = document.getElementById('post-job-modal');
      this.offerLetterModal = document.getElementById('offer-letter-modal');
      this.toastContainer = document.getElementById('toast-container');
    }

    attachEventListeners() {
      // Navigation tab switching
      document.querySelectorAll('.sidebar-nav .nav-item[data-view]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const view = btn.getAttribute('data-view');
          this.switchView(view);
        });
      });

      // Mobile Menu
      const mobileToggle = document.getElementById('mobile-menu-toggle');
      if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
          this.sidebar.classList.toggle('open');
        });
      }

      // Theme Toggle
      const themeToggleBtn = document.getElementById('btn-theme-toggle');
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => this.toggleTheme());
      }

      // Layout Switcher for Jobs (Coloured Columns vs Grid)
      if (this.btnLayoutColumns && this.btnLayoutGrid) {
        this.btnLayoutColumns.addEventListener('click', () => {
          this.btnLayoutColumns.classList.add('active');
          this.btnLayoutGrid.classList.remove('active');
          this.jobsColumnsContainer.classList.remove('hidden');
          this.jobsContainer.classList.add('hidden');
        });

        this.btnLayoutGrid.addEventListener('click', () => {
          this.btnLayoutGrid.classList.add('active');
          this.btnLayoutColumns.classList.remove('active');
          this.jobsColumnsContainer.classList.add('hidden');
          this.jobsContainer.classList.remove('hidden');
        });
      }

      // Layout Switcher for Applied Jobs (Coloured Kanban Columns vs Timeline List)
      if (this.btnAppliedKanban && this.btnAppliedStepper) {
        this.btnAppliedKanban.addEventListener('click', () => {
          this.btnAppliedKanban.classList.add('active');
          this.btnAppliedStepper.classList.remove('active');
          this.appliedKanbanContainer.classList.remove('hidden');
          this.appliedContainer.classList.add('hidden');
        });

        this.btnAppliedStepper.addEventListener('click', () => {
          this.btnAppliedStepper.classList.add('active');
          this.btnAppliedKanban.classList.remove('active');
          this.appliedKanbanContainer.classList.add('hidden');
          this.appliedContainer.classList.remove('hidden');
        });
      }

      // Search and Filter Listeners
      this.searchInput.addEventListener('input', (e) => {
        this.filters.search = e.target.value.toLowerCase().trim();
        this.btnClearSearch.classList.toggle('hidden', !e.target.value);
        this.renderJobsBoard();
      });

      this.btnClearSearch.addEventListener('click', () => {
        this.searchInput.value = '';
        this.filters.search = '';
        this.btnClearSearch.classList.add('hidden');
        this.renderJobsBoard();
      });

      this.filterCategory.addEventListener('change', (e) => {
        this.filters.category = e.target.value;
        this.renderJobsBoard();
      });

      this.filterPackage.addEventListener('change', (e) => {
        this.filters.minPackage = parseFloat(e.target.value);
        this.renderJobsBoard();
      });

      this.filterSort.addEventListener('change', (e) => {
        this.filters.sortBy = e.target.value;
        this.renderJobsBoard();
      });

      this.toggleEligibleOnly.addEventListener('change', (e) => {
        this.filters.eligibleOnly = e.target.checked;
        this.renderJobsBoard();
      });

      const btnResetFilters = document.getElementById('btn-reset-filters');
      if (btnResetFilters) {
        btnResetFilters.addEventListener('click', () => {
          this.filters.search = '';
          this.filters.category = 'all';
          this.filters.minPackage = 0;
          this.filters.eligibleOnly = false;
          this.searchInput.value = '';
          this.filterCategory.value = 'all';
          this.filterPackage.value = '0';
          this.toggleEligibleOnly.checked = false;
          this.renderJobsBoard();
        });
      }

      // Applied Filter Tabs
      document.querySelectorAll('.applied-filter-tabs .tab-btn').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.applied-filter-tabs .tab-btn').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.filters.appliedTab = tab.getAttribute('data-status-filter');
          this.renderAppliedJobs();
        });
      });

      const btnGotoJobs = document.getElementById('btn-goto-jobs');
      if (btnGotoJobs) {
        btnGotoJobs.addEventListener('click', () => this.switchView('jobs'));
      }

      // Quick Profile Modals
      const openProfileButtons = [
        document.getElementById('btn-open-profile'),
        document.getElementById('btn-header-profile'),
        document.getElementById('btn-adjust-profile-banner'),
        document.getElementById('btn-quick-eligibility')
      ];

      openProfileButtons.forEach(btn => {
        if (btn) {
          btn.addEventListener('click', () => this.openProfileModal());
        }
      });

      // CGPA Slider preview
      const inputCgpa = document.getElementById('input-cgpa');
      const cgpaPreview = document.getElementById('cgpa-val-preview');
      if (inputCgpa && cgpaPreview) {
        inputCgpa.addEventListener('input', (e) => {
          cgpaPreview.textContent = parseFloat(e.target.value).toFixed(1);
        });
      }

      // Form Profile Submit
      const formProfile = document.getElementById('form-edit-profile');
      if (formProfile) {
        formProfile.addEventListener('submit', (e) => {
          e.preventDefault();
          this.saveProfileChanges();
        });
      }

      document.getElementById('btn-close-profile-modal')?.addEventListener('click', () => this.closeModal());
      document.getElementById('btn-cancel-profile')?.addEventListener('click', () => this.closeModal());

      // Job Details Modal Actions
      document.getElementById('btn-close-job-modal')?.addEventListener('click', () => this.closeModal());
      document.getElementById('btn-modal-cancel')?.addEventListener('click', () => this.closeModal());
      document.getElementById('btn-modal-apply')?.addEventListener('click', () => {
        if (this.selectedJobForModal) {
          this.handleApplyJob(this.selectedJobForModal.id);
          this.closeModal();
        }
      });

      // Post Job Modal
      const btnHeaderAddJob = document.getElementById('btn-header-add-job');
      const btnNavAddJob = document.getElementById('btn-post-job-nav');
      if (btnHeaderAddJob) btnHeaderAddJob.addEventListener('click', () => this.openPostJobModal());
      if (btnNavAddJob) btnNavAddJob.addEventListener('click', () => this.openPostJobModal());

      document.getElementById('btn-close-post-job')?.addEventListener('click', () => this.closeModal());
      document.getElementById('btn-cancel-post-job')?.addEventListener('click', () => this.closeModal());

      const formPostJob = document.getElementById('form-post-job');
      if (formPostJob) {
        formPostJob.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleCreateJob();
        });
      }

      // Add Certification Modal
      const btnAddCertModal = document.getElementById('btn-add-cert-modal');
      if (btnAddCertModal) btnAddCertModal.addEventListener('click', () => this.openAddCertModal());
      document.getElementById('btn-close-cert-modal')?.addEventListener('click', () => this.closeModal());
      document.getElementById('btn-cancel-cert')?.addEventListener('click', () => this.closeModal());

      const formAddCert = document.getElementById('form-add-cert');
      if (formAddCert) {
        formAddCert.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleCreateCertification();
        });
      }

      // Offer Letter Modal & Confetti
      document.getElementById('btn-close-offer-modal')?.addEventListener('click', () => this.closeModal());
      document.getElementById('btn-fire-confetti')?.addEventListener('click', () => this.celebrateConfetti());

      document.getElementById('btn-accept-offer')?.addEventListener('click', () => {
        if (this.selectedJobForModal) {
          this.store.acceptOffer(this.selectedJobForModal.id);
          this.showToast('Placement Offer Letter Accepted! Congratulations 🎉', 'success');
          this.celebrateConfetti();
          this.closeModal();
          this.renderAll();
        }
      });

      document.getElementById('btn-decline-offer')?.addEventListener('click', () => {
        this.showToast('Offer declined.', 'info');
        this.closeModal();
      });

      // Close modals on escape key or clicking backdrop
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeModal();
      });

      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) this.closeModal();
        });
      });
    }

    // ------------------------------------------------------------------------
    // View Navigation
    // ------------------------------------------------------------------------
    switchView(viewName) {
      this.currentView = viewName;

      // Update sidebar nav items
      document.querySelectorAll('.sidebar-nav .nav-item[data-view]').forEach(item => {
        const itemTarget = item.getAttribute('data-view');
        item.classList.toggle('active', itemTarget === viewName);
      });

      // Update page views
      const views = ['jobs', 'applied', 'interviews', 'certifications'];
      views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.toggle('hidden', v !== viewName);
      });

      // Update Header Title & Subtitle
      const titleEl = document.getElementById('page-title');
      const subtitleEl = document.getElementById('page-subtitle');

      switch (viewName) {
        case 'jobs':
          titleEl.textContent = 'Available Campus Jobs';
          subtitleEl.textContent = 'Browse campus recruitment drives, verify job eligibility & certification requirements';
          break;
        case 'applied':
          titleEl.textContent = 'My Job Applications';
          subtitleEl.textContent = 'Track application pipeline, interview rounds, screening updates, and live outcomes';
          break;
        case 'interviews':
          titleEl.textContent = 'Interviews & Cracked Offers';
          subtitleEl.textContent = 'Review cracked campus offers, upcoming rounds schedule, and company cheat sheets';
          break;
        case 'certifications':
          titleEl.textContent = 'Certifications Hub & Readiness Index';
          subtitleEl.textContent = 'Manage verified credentials and match against campus recruitments';
          break;
      }

      // Re-render the active view
      if (viewName === 'jobs') this.renderJobsBoard();
      else if (viewName === 'applied') this.renderAppliedJobs();
      else if (viewName === 'interviews') this.renderInterviewsView();
      else if (viewName === 'certifications') this.renderCertificationsView();

      // Close mobile drawer if opened
      this.sidebar.classList.remove('open');
    }

    toggleTheme() {
      const isDark = document.body.classList.contains('theme-dark');
      if (isDark) {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        document.getElementById('theme-icon-moon').classList.add('hidden');
        document.getElementById('theme-icon-sun').classList.remove('hidden');
      } else {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        document.getElementById('theme-icon-moon').classList.remove('hidden');
        document.getElementById('theme-icon-sun').classList.add('hidden');
      }
    }

    // ------------------------------------------------------------------------
    // RENDER MAIN DATA & METRICS
    // ------------------------------------------------------------------------
    renderAll() {
      this.renderSidebarStudent();
      this.renderKPIMetrics();
      this.renderCriteriaBanner();

      if (this.currentView === 'jobs') this.renderJobsBoard();
      else if (this.currentView === 'applied') this.renderAppliedJobs();
      else if (this.currentView === 'interviews') this.renderInterviewsView();
      else if (this.currentView === 'certifications') this.renderCertificationsView();
    }

    renderSidebarStudent() {
      const student = this.store.student;
      this.sidebarStudentName.textContent = student.name;
      this.sidebarStudentMeta.textContent = `${student.department} • Batch ${student.gradYear}`;
      this.sidebarCgpa.textContent = student.cgpa.toFixed(1);
      this.sidebarCertCount.textContent = student.certifications.length;

      // Badges
      const totalJobs = this.store.jobs.length;
      const appliedCount = this.store.applied.length;
      const crackedCount = this.store.applied.filter(a => a.cracked).length;
      const certCount = student.certifications.length;

      this.navBadgeJobs.textContent = totalJobs;
      this.navBadgeApplied.textContent = appliedCount;
      this.navBadgeCracked.textContent = `${crackedCount} Offer${crackedCount === 1 ? '' : 's'}`;
      this.navBadgeCerts.textContent = certCount;
    }

    renderKPIMetrics() {
      const totalJobs = this.store.jobs.length;
      let eligibleCount = 0;

      this.store.jobs.forEach(job => {
        const evalRes = this.store.evaluateEligibility(job);
        if (evalRes.isEligible) eligibleCount++;
      });

      const appliedCount = this.store.applied.length;
      const crackedApps = this.store.applied.filter(a => a.cracked);
      const crackedCount = crackedApps.length;

      // Highest package from cracked offers
      let highestPackage = 0;
      crackedApps.forEach(a => {
        if (a.offerDetails && a.offerDetails.ctc > highestPackage) {
          highestPackage = a.offerDetails.ctc;
        }
      });

      this.kpiTotalJobs.textContent = totalJobs;
      this.kpiEligibleJobs.textContent = eligibleCount;
      this.kpiEligibilityRate.textContent = `${Math.round((eligibleCount / (totalJobs || 1)) * 100)}% Match`;
      this.kpiAppliedJobs.textContent = appliedCount;
      this.kpiCrackedOffers.textContent = `${crackedCount} Offer${crackedCount === 1 ? '' : 's'}`;
      this.kpiHighestPackage.textContent = highestPackage > 0 ? `₹ ${highestPackage.toFixed(1)} LPA` : '₹ 0 LPA';
      this.summaryEligibleCount.textContent = eligibleCount;
    }

    renderCriteriaBanner() {
      const student = this.store.student;
      this.bannerCgpa.textContent = `${student.cgpa.toFixed(1)}/10`;
      this.bannerBranch.textContent = student.department.replace(/\(.*\)/, '').trim();
      this.bannerBacklogs.textContent = `${student.backlogs} Backlog${student.backlogs === 1 ? '' : 's'}`;
      this.bannerCerts.textContent = `${student.certifications.length} Verified`;
    }

    // ------------------------------------------------------------------------
    // VIEW 1: RENDER AVAILABLE JOBS (COLOURED COLUMNS & GRID)
    // ------------------------------------------------------------------------
    renderJobsBoard() {
      // Clear grid & columns containers
      this.jobsContainer.innerHTML = '';
      if (this.cardsColEligible) this.cardsColEligible.innerHTML = '';
      if (this.cardsColPartial) this.cardsColPartial.innerHTML = '';
      if (this.cardsColIneligible) this.cardsColIneligible.innerHTML = '';

      let jobs = [...this.store.jobs];

      // 1. Text Search Filter
      if (this.filters.search) {
        const q = this.filters.search;
        jobs = jobs.filter(j => 
          j.company.toLowerCase().includes(q) ||
          j.title.toLowerCase().includes(q) ||
          j.category.toLowerCase().includes(q) ||
          (j.requiredCerts || []).some(c => c.toLowerCase().includes(q))
        );
      }

      // 2. Category Filter
      if (this.filters.category !== 'all') {
        jobs = jobs.filter(j => j.category === this.filters.category);
      }

      // 3. Min Package Filter
      if (this.filters.minPackage > 0) {
        jobs = jobs.filter(j => j.packageLPA >= this.filters.minPackage);
      }

      // 4. Eligibility Filter ("Show Eligible Only")
      if (this.filters.eligibleOnly) {
        jobs = jobs.filter(j => {
          const evalRes = this.store.evaluateEligibility(j);
          return evalRes.isEligible;
        });
      }

      // 5. Sort Filter
      if (this.filters.sortBy === 'package-desc') {
        jobs.sort((a, b) => b.packageLPA - a.packageLPA);
      } else if (this.filters.sortBy === 'package-asc') {
        jobs.sort((a, b) => a.packageLPA - b.packageLPA);
      } else if (this.filters.sortBy === 'match') {
        jobs.sort((a, b) => {
          const evalA = this.store.evaluateEligibility(a);
          const evalB = this.store.evaluateEligibility(b);
          return evalB.matchScore - evalA.matchScore;
        });
      } else {
        // Deadline (Urgent first)
        jobs.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      }

      this.jobsCountDisplay.textContent = jobs.length;
      this.jobsEmptyState.classList.toggle('hidden', jobs.length > 0);

      // Render Active Filter Tags
      this.renderActiveFilterTags();

      // Counters for 3 Coloured Columns
      let countEligible = 0;
      let countPartial = 0;
      let countIneligible = 0;

      // Render Cards into 3 Coloured Columns and Standard Grid
      jobs.forEach(job => {
        const evalRes = this.store.evaluateEligibility(job);

        // Append to Standard Grid
        const gridCard = this.createJobCardElement(job, evalRes);
        this.jobsContainer.appendChild(gridCard);

        // Append to Coloured Columns
        const columnCard = this.createJobCardElement(job, evalRes);
        if (evalRes.isEligible) {
          if (this.cardsColEligible) this.cardsColEligible.appendChild(columnCard);
          countEligible++;
        } else if (evalRes.isPartial) {
          if (this.cardsColPartial) this.cardsColPartial.appendChild(columnCard);
          countPartial++;
        } else {
          if (this.cardsColIneligible) this.cardsColIneligible.appendChild(columnCard);
          countIneligible++;
        }
      });

      // Update Column Badges
      if (this.countColEligible) this.countColEligible.textContent = countEligible;
      if (this.countColPartial) this.countColPartial.textContent = countPartial;
      if (this.countColIneligible) this.countColIneligible.textContent = countIneligible;
    }

    renderActiveFilterTags() {
      const container = this.activeFilterTags;
      container.innerHTML = '';

      if (this.filters.search) {
        container.appendChild(this.createTag(`Search: "${this.filters.search}"`, () => {
          this.filters.search = '';
          this.searchInput.value = '';
          this.btnClearSearch.classList.add('hidden');
          this.renderJobsBoard();
        }));
      }

      if (this.filters.category !== 'all') {
        container.appendChild(this.createTag(`Domain: ${this.filters.category}`, () => {
          this.filters.category = 'all';
          this.filterCategory.value = 'all';
          this.renderJobsBoard();
        }));
      }

      if (this.filters.minPackage > 0) {
        container.appendChild(this.createTag(`CTC ≥ ₹${this.filters.minPackage} LPA`, () => {
          this.filters.minPackage = 0;
          this.filterPackage.value = '0';
          this.renderJobsBoard();
        }));
      }

      if (this.filters.eligibleOnly) {
        container.appendChild(this.createTag('Eligible Only: Enabled', () => {
          this.filters.eligibleOnly = false;
          this.toggleEligibleOnly.checked = false;
          this.renderJobsBoard();
        }));
      }
    }

    createTag(text, onRemove) {
      const tag = document.createElement('span');
      tag.className = 'stat-pill';
      tag.style.cursor = 'pointer';
      tag.innerHTML = `${text} <strong style="margin-left:4px; color:var(--rose-500)">&times;</strong>`;
      tag.addEventListener('click', onRemove);
      return tag;
    }

    createJobCardElement(job, evalRes) {
      const card = document.createElement('article');
      card.className = 'job-card';

      // Status card modifier class
      if (evalRes.isCracked) card.classList.add('status-cracked');
      else if (evalRes.isApplied) card.classList.add('status-applied');
      else if (evalRes.isEligible) card.classList.add('status-eligible');
      else if (evalRes.isPartial) card.classList.add('status-partial');
      else card.classList.add('status-ineligible');

      // Banner markup
      let bannerHtml = '';
      if (evalRes.isCracked) {
        bannerHtml = `
          <div class="eligibility-status-banner banner-cracked">
            <span>🎉 Interview Cracked! Offer Extended</span>
            <span>✓ Verified</span>
          </div>`;
      } else if (evalRes.isApplied) {
        bannerHtml = `
          <div class="eligibility-status-banner banner-applied">
            <span>🔵 Application Active: ${evalRes.application.statusText}</span>
            <span>Applied</span>
          </div>`;
      } else if (evalRes.isEligible) {
        bannerHtml = `
          <div class="eligibility-status-banner banner-eligible">
            <span>🟢 Eligible To Apply (CGPA & Certs Matched)</span>
            <span>100% Match</span>
          </div>`;
      } else if (evalRes.isPartial) {
        bannerHtml = `
          <div class="eligibility-status-banner banner-partial">
            <span>🟡 Missing ${evalRes.certsMissing.length} Required Certification(s)</span>
            <span>${evalRes.matchScore}% Match</span>
          </div>`;
      } else {
        bannerHtml = `
          <div class="eligibility-status-banner banner-ineligible">
            <span>🔴 Ineligible: ${evalRes.reasons[0] || 'Criteria not met'}</span>
            <span>Check Criteria</span>
          </div>`;
      }

      // Certifications pills markup
      let certsHtml = '';
      if (job.requiredCerts && job.requiredCerts.length > 0) {
        const certTags = job.requiredCerts.map(cert => {
          const isMatched = evalRes.certsMatched.includes(cert);
          return `<span class="cert-req-tag ${isMatched ? 'cert-matched' : 'cert-missing'}">
            ${isMatched ? '✓' : '✕'} ${cert}
          </span>`;
        }).join('');

        certsHtml = `
          <div class="card-cert-section">
            <div class="card-cert-title">
              <span>Required Certifications (${job.requiredCerts.length})</span>
              <span style="color:${evalRes.certsOk ? '#059669' : '#d97706'}">
                ${evalRes.certsMatched.length}/${job.requiredCerts.length} Met
              </span>
            </div>
            <div class="cert-tags-wrap">${certTags}</div>
          </div>
        `;
      } else {
        certsHtml = `
          <div class="card-cert-section">
            <div class="card-cert-title">
              <span>Required Certifications</span>
              <span style="color:#059669">Open to All Certified Students</span>
            </div>
            <p style="font-size:0.75rem; color:var(--text-muted)">General Tech Assessment only</p>
          </div>
        `;
      }

      // Action Button
      let actionBtnHtml = '';
      if (evalRes.isCracked) {
        actionBtnHtml = `<button class="btn btn-sm btn-outline-gold btn-view-offer" data-id="${job.id}">View Offer Letter 🎉</button>`;
      } else if (evalRes.isApplied) {
        actionBtnHtml = `<button class="btn btn-sm btn-secondary btn-track-app" data-id="${job.id}">Track Status</button>`;
      } else if (evalRes.isEligible) {
        actionBtnHtml = `<button class="btn btn-sm btn-primary btn-apply-job" data-id="${job.id}">Apply Now</button>`;
      } else {
        actionBtnHtml = `<button class="btn btn-sm btn-outline btn-check-eligibility" data-id="${job.id}">Fix Criteria / Apply</button>`;
      }

      card.innerHTML = `
        <div class="job-card-header">
          <div class="company-brand-wrap">
            <div class="company-logo" style="background:${job.logoBg}">
              ${job.initials}
            </div>
            <div class="company-info">
              <h3>${job.title}</h3>
              <div class="company-name">
                <strong>${job.company}</strong> • ${job.category}
              </div>
            </div>
          </div>
          <div class="job-package-badge">
            <span class="package-label">Annual CTC</span>
            <span class="package-val">₹ ${job.packageLPA.toFixed(1)} LPA</span>
          </div>
        </div>

        ${bannerHtml}

        <div class="job-attributes-row">
          <span class="attr-pill highlight">Min CGPA: ${job.minCGPA.toFixed(1)}</span>
          <span class="attr-pill">Max Backlogs: ${job.maxBacklogs}</span>
          <span class="attr-pill">${job.location}</span>
        </div>

        ${certsHtml}

        <div class="job-card-footer">
          <span class="deadline-text">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Deadline: ${new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <div class="card-actions-group">
            <button class="btn btn-sm btn-secondary btn-view-details" data-id="${job.id}">Details</button>
            ${actionBtnHtml}
          </div>
        </div>
      `;

      // Event handlers for card buttons
      card.querySelector('.btn-view-details').addEventListener('click', () => {
        this.openJobDetailsModal(job);
      });

      const applyBtn = card.querySelector('.btn-apply-job');
      if (applyBtn) {
        applyBtn.addEventListener('click', () => this.handleApplyJob(job.id));
      }

      const checkEligBtn = card.querySelector('.btn-check-eligibility');
      if (checkEligBtn) {
        checkEligBtn.addEventListener('click', () => this.openJobDetailsModal(job));
      }

      const trackBtn = card.querySelector('.btn-track-app');
      if (trackBtn) {
        trackBtn.addEventListener('click', () => this.switchView('applied'));
      }

      const offerBtn = card.querySelector('.btn-view-offer');
      if (offerBtn) {
        offerBtn.addEventListener('click', () => this.openOfferModal(job));
      }

      return card;
    }

    // ------------------------------------------------------------------------
    // VIEW 2: RENDER APPLIED JOBS (COLOURED KANBAN COLUMNS & TIMELINE)
    // ------------------------------------------------------------------------
    renderAppliedJobs() {
      // Clear containers
      this.appliedContainer.innerHTML = '';
      if (this.cardsKanbanScreening) this.cardsKanbanScreening.innerHTML = '';
      if (this.cardsKanbanInterview) this.cardsKanbanInterview.innerHTML = '';
      if (this.cardsKanbanCracked) this.cardsKanbanCracked.innerHTML = '';

      let apps = [...this.store.applied];

      // Tab counts
      const screeningCount = apps.filter(a => a.status === 'Screening').length;
      const interviewCount = apps.filter(a => a.status === 'Interview').length;
      const crackedCount = apps.filter(a => a.status === 'Cracked').length;

      this.appliedTabAll.textContent = apps.length;
      this.appliedTabScreening.textContent = screeningCount;
      this.appliedTabInterview.textContent = interviewCount;
      this.appliedTabCracked.textContent = crackedCount;

      // Filter by tab for timeline list
      let filteredApps = [...apps];
      if (this.filters.appliedTab === 'Screening') {
        filteredApps = filteredApps.filter(a => a.status === 'Screening');
      } else if (this.filters.appliedTab === 'Interview') {
        filteredApps = filteredApps.filter(a => a.status === 'Interview');
      } else if (this.filters.appliedTab === 'Cracked') {
        filteredApps = filteredApps.filter(a => a.status === 'Cracked');
      }

      this.appliedEmptyState.classList.toggle('hidden', apps.length > 0);

      // 1. Populate 3 Coloured Kanban Columns
      let kScreening = 0, kInterview = 0, kCracked = 0;
      apps.forEach(app => {
        const job = this.store.jobs.find(j => j.id === app.jobId);
        if (!job) return;

        const kanbanCard = this.createKanbanCardElement(job, app);
        if (app.status === 'Screening') {
          if (this.cardsKanbanScreening) this.cardsKanbanScreening.appendChild(kanbanCard);
          kScreening++;
        } else if (app.status === 'Interview') {
          if (this.cardsKanbanInterview) this.cardsKanbanInterview.appendChild(kanbanCard);
          kInterview++;
        } else if (app.status === 'Cracked') {
          if (this.cardsKanbanCracked) this.cardsKanbanCracked.appendChild(kanbanCard);
          kCracked++;
        }
      });

      if (this.countKanbanScreening) this.countKanbanScreening.textContent = kScreening;
      if (this.countKanbanInterview) this.countKanbanInterview.textContent = kInterview;
      if (this.countKanbanCracked) this.countKanbanCracked.textContent = kCracked;

      // 2. Populate Timeline List View
      filteredApps.forEach(app => {
        const job = this.store.jobs.find(j => j.id === app.jobId);
        if (!job) return;

        const row = document.createElement('div');
        row.className = 'applied-row-card';

        // Stepper markup
        const totalRounds = job.rounds.length;
        const currentIdx = app.currentStageIndex;

        const stepsHtml = job.rounds.map((roundName, idx) => {
          let stepClass = '';
          if (app.cracked || idx < currentIdx) {
            stepClass = 'completed';
          } else if (idx === currentIdx) {
            stepClass = 'current';
          }

          return `
            <div class="stepper-step ${stepClass}">
              <div class="step-circle">${app.cracked || idx < currentIdx ? '✓' : idx + 1}</div>
              <span class="step-label">${roundName}</span>
              ${idx < totalRounds - 1 ? '<div class="stepper-line"></div>' : ''}
            </div>
          `;
        }).join('');

        // Action CTA
        let actionBtn = '';
        if (app.cracked) {
          actionBtn = `
            <button class="btn btn-sm btn-outline-gold btn-app-offer" data-id="${job.id}">
              <span>View Official Offer Letter 🎉</span>
            </button>
          `;
        } else {
          actionBtn = `
            <button class="btn btn-sm btn-outline btn-simulate-advance" data-id="${job.id}" title="Simulate advancing to next interview stage or cracking offer">
              <span>Advance Round / Crack Interview ⚡</span>
            </button>
          `;
        }

        row.innerHTML = `
          <div class="applied-card-top">
            <div class="applied-company-group">
              <div class="company-logo" style="background:${job.logoBg}">
                ${job.initials}
              </div>
              <div>
                <h3>${job.title}</h3>
                <p style="font-size:0.84rem; color:var(--text-muted)">
                  <strong>${job.company}</strong> • Applied on ${app.appliedDate} • CTC: <strong class="text-emerald">₹ ${job.packageLPA.toFixed(1)} LPA</strong>
                </p>
              </div>
            </div>

            <div>
              <span class="applied-status-pill ${app.cracked ? 'banner-cracked' : 'banner-applied'}">
                ${app.cracked ? '🎉 Offer Cracked!' : 'In Progress'}
              </span>
            </div>
          </div>

          <!-- Pipeline Stepper -->
          <div class="app-progress-stepper">
            ${stepsHtml}
          </div>

          <div class="applied-actions-bar">
            <div class="applied-next-info">
              <strong>Next Action:</strong> ${app.nextStep}
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-sm btn-secondary btn-app-details" data-id="${job.id}">View Requirements</button>
              ${actionBtn}
            </div>
          </div>
        `;

        row.querySelector('.btn-app-details').addEventListener('click', () => {
          this.openJobDetailsModal(job);
        });

        const simBtn = row.querySelector('.btn-simulate-advance');
        if (simBtn) {
          simBtn.addEventListener('click', () => {
            this.store.advanceApplication(job.id);
            const updated = this.store.applied.find(a => a.jobId === job.id);
            if (updated && updated.cracked) {
              this.showToast(`🎉 WOW! You cracked the interview rounds for ${job.company}! Placement Offer received!`, 'success');
              this.celebrateConfetti();
            } else {
              this.showToast(`Advanced to next interview round for ${job.company}!`, 'info');
            }
            this.renderAll();
          });
        }

        const offerBtn = row.querySelector('.btn-app-offer');
        if (offerBtn) {
          offerBtn.addEventListener('click', () => this.openOfferModal(job));
        }

        this.appliedContainer.appendChild(row);
      });
    }

    createKanbanCardElement(job, app) {
      const card = document.createElement('div');
      card.className = 'kanban-card';

      let actionHtml = '';
      if (app.cracked) {
        actionHtml = `<button class="btn btn-sm btn-outline-gold btn-kanban-offer" style="width:100%;">View Offer Letter 🎉</button>`;
      } else {
        actionHtml = `<button class="btn btn-sm btn-outline btn-kanban-advance" style="width:100%;">Advance Round ⚡</button>`;
      }

      card.innerHTML = `
        <div class="kanban-card-top">
          <div class="company-logo" style="width:36px; height:36px; font-size:0.95rem; background:${job.logoBg};">
            ${job.initials}
          </div>
          <div>
            <h4 class="kanban-card-title">${job.title}</h4>
            <div class="kanban-card-company">${job.company}</div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="kanban-card-ctc">₹ ${job.packageLPA.toFixed(1)} LPA</span>
          <span class="kanban-card-stage">${app.statusText}</span>
        </div>

        <div style="font-size:0.75rem; color:var(--text-dim); margin-top:2px;">
          Applied: ${app.appliedDate}
        </div>

        <div style="margin-top:4px;">
          ${actionHtml}
        </div>
      `;

      const advBtn = card.querySelector('.btn-kanban-advance');
      if (advBtn) {
        advBtn.addEventListener('click', () => {
          this.store.advanceApplication(job.id);
          const updated = this.store.applied.find(a => a.jobId === job.id);
          if (updated && updated.cracked) {
            this.showToast(`🎉 WOW! You cracked the interview rounds for ${job.company}! Placement Offer received!`, 'success');
            this.celebrateConfetti();
          } else {
            this.showToast(`Advanced to next interview round for ${job.company}!`, 'info');
          }
          this.renderAll();
        });
      }

      const offerBtn = card.querySelector('.btn-kanban-offer');
      if (offerBtn) {
        offerBtn.addEventListener('click', () => this.openOfferModal(job));
      }

      return card;
    }

    // ------------------------------------------------------------------------
    // VIEW 3: RENDER INTERVIEWS & CRACKED OFFERS
    // ------------------------------------------------------------------------
    renderInterviewsView() {
      const crackedContainer = this.crackedOffersContainer;
      const scheduledContainer = this.interviewsScheduleContainer;
      crackedContainer.innerHTML = '';
      scheduledContainer.innerHTML = '';

      const crackedApps = this.store.applied.filter(a => a.cracked);
      
      // Calculate hero stats
      let highestPackage = 0;
      let totalCtc = 0;

      crackedApps.forEach(a => {
        if (a.offerDetails) {
          const c = a.offerDetails.ctc;
          totalCtc += c;
          if (c > highestPackage) highestPackage = c;
        }
      });

      const avgCtc = crackedApps.length > 0 ? (totalCtc / crackedApps.length).toFixed(1) : 0;

      this.crackedCountHero.textContent = crackedApps.length;
      this.crackedHighestHero.textContent = `₹ ${highestPackage.toFixed(1)} LPA`;
      this.crackedAvgHero.textContent = `₹ ${avgCtc} LPA`;

      // Render Cracked Offers Cards
      if (crackedApps.length === 0) {
        crackedContainer.innerHTML = `
          <div class="empty-state-card" style="grid-column: 1/-1;">
            <p>No placement offers cracked yet. Clear your interview rounds in the Applications tab to secure job offers!</p>
          </div>
        `;
      } else {
        crackedApps.forEach(app => {
          const job = this.store.jobs.find(j => j.id === app.jobId);
          if (!job) return;

          const card = document.createElement('div');
          card.className = 'offer-card';
          card.innerHTML = `
            <div class="offer-card-badge">
              <span>CRACKED & VERIFIED</span>
            </div>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <div class="company-logo" style="background:${job.logoBg}">
                ${job.initials}
              </div>
              <div>
                <h4 style="font-size:1.15rem; font-weight:800;">${job.title}</h4>
                <p style="font-size:0.84rem; color:var(--text-muted)">${job.company} • ${job.category}</p>
              </div>
            </div>

            <div class="offer-card-body">
              <div class="offer-stat-line">
                <span>Total CTC Package:</span>
                <strong class="text-emerald" style="font-size:1.1rem;">₹ ${app.offerDetails.ctc.toFixed(1)} LPA</strong>
              </div>
              <div class="offer-stat-line">
                <span>Base Component:</span>
                <strong>₹ ${app.offerDetails.base} LPA</strong>
              </div>
              <div class="offer-stat-line">
                <span>Joining Bonus:</span>
                <strong>₹ ${app.offerDetails.bonus} LPA</strong>
              </div>
              <div class="offer-stat-line">
                <span>Status:</span>
                <strong style="color:${app.offerDetails.accepted ? '#059669' : '#d97706'}">
                  ${app.offerDetails.accepted ? '✓ Accepted by Candidate' : '● Offer Letter Ready'}
                </strong>
              </div>
            </div>

            <div style="margin-top:auto; display:flex; gap:8px;">
              <button class="btn btn-sm btn-outline-gold flex-1 btn-open-offer-modal" data-id="${job.id}">
                ${app.offerDetails.accepted ? 'View Offer Letter' : 'Review & Sign Offer'}
              </button>
            </div>
          `;

          card.querySelector('.btn-open-offer-modal').addEventListener('click', () => {
            this.openOfferModal(job);
          });

          crackedContainer.appendChild(card);
        });
      }

      // Render Scheduled & Upcoming Interviews
      const interviews = this.store.interviews;
      if (interviews.length === 0) {
        scheduledContainer.innerHTML = '<p class="text-muted">No interviews scheduled at this moment.</p>';
      } else {
        interviews.forEach(intItem => {
          const item = document.createElement('div');
          item.className = 'interview-item-card';
          item.innerHTML = `
            <div style="display:flex; align-items:center; gap:16px;">
              <div class="interview-date-box">
                <span class="date-day">${intItem.day}</span>
                <span class="date-month">${intItem.month}</span>
              </div>
              <div class="interview-details">
                <div class="round-name">${intItem.company}: ${intItem.round}</div>
                <div class="round-sub">
                  ${intItem.role} • <strong>${intItem.time}</strong> • Via ${intItem.platform}
                </div>
                <div style="font-size:0.75rem; color:var(--text-dim); margin-top:2px;">
                  Interviewer: ${intItem.interviewer}
                </div>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:8px;">
              <span class="badge-pill-info">${intItem.status}</span>
              <button class="btn btn-sm btn-primary" onclick="alert('Launching ${intItem.platform} meeting link for ${intItem.company} Interview...')">
                Join Interview
              </button>
            </div>
          `;
          scheduledContainer.appendChild(item);
        });
      }
    }

    // ------------------------------------------------------------------------
    // VIEW 4: RENDER CERTIFICATIONS HUB
    // ------------------------------------------------------------------------
    renderCertificationsView() {
      const studentCerts = this.store.student.certifications;
      this.userCertCount.textContent = studentCerts.length;

      const certsContainer = this.studentCertsContainer;
      certsContainer.innerHTML = '';

      if (studentCerts.length === 0) {
        certsContainer.innerHTML = `
          <div class="empty-state-card" style="grid-column: 1/-1;">
            <p>You have not added any certifications yet. Click "Add New Certification" to boost your eligibility across high-paying campus roles!</p>
          </div>
        `;
      } else {
        studentCerts.forEach(cert => {
          const card = document.createElement('div');
          card.className = 'student-cert-card';
          card.innerHTML = `
            <div class="cert-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="cert-info">
              <h4>${cert.title}</h4>
              <div class="issuer">${cert.issuer}</div>
              <div class="date-id">Issued: ${cert.date} • ID: ${cert.credId}</div>
            </div>
            <button class="btn-remove-cert" data-id="${cert.id}" title="Remove Certification">&times;</button>
          `;

          card.querySelector('.btn-remove-cert').addEventListener('click', () => {
            if (confirm(`Remove "${cert.title}" from your verified credentials?`)) {
              this.store.removeCertification(cert.id);
              this.showToast('Certification removed from profile.', 'info');
              this.renderAll();
            }
          });

          certsContainer.appendChild(card);
        });
      }

      // Campus High-Demand Certifications Analysis
      const demandContainer = this.demandCertsContainer;
      demandContainer.innerHTML = '';

      // Count occurrences in jobs
      const certDemandMap = {};
      this.store.jobs.forEach(j => {
        (j.requiredCerts || []).forEach(c => {
          certDemandMap[c] = (certDemandMap[c] || 0) + 1;
        });
      });

      // Sort by demand count
      const sortedDemands = Object.entries(certDemandMap).sort((a, b) => b[1] - a[1]);

      sortedDemands.forEach(([certName, count]) => {
        const studentHas = this.store.hasCertification(certName);
        const item = document.createElement('div');
        item.className = 'demand-cert-card';
        item.innerHTML = `
          <div>
            <h4 style="font-size:0.95rem; font-weight:700;">${certName}</h4>
            <span style="font-size:0.78rem; color:${studentHas ? '#059669' : '#d97706'}">
              ${studentHas ? '✓ You already hold this certification' : '✕ Missing in your profile - Recommended!'}
            </span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="demand-badge">${count} Campus Drive${count === 1 ? '' : 's'} Demanding</span>
            ${!studentHas ? `<button class="btn btn-sm btn-outline btn-quick-add-cert" data-title="${certName}">+ Add Credential</button>` : ''}
          </div>
        `;

        const quickAddBtn = item.querySelector('.btn-quick-add-cert');
        if (quickAddBtn) {
          quickAddBtn.addEventListener('click', () => {
            this.openAddCertModal(certName);
          });
        }

        demandContainer.appendChild(item);
      });
    }

    // ------------------------------------------------------------------------
    // MODALS & USER ACTIONS
    // ------------------------------------------------------------------------
    openJobDetailsModal(job) {
      this.selectedJobForModal = job;
      const evalRes = this.store.evaluateEligibility(job);

      document.getElementById('modal-job-title').textContent = job.title;
      document.getElementById('modal-company-name').textContent = `${job.company} • ${job.location}`;
      
      const logoEl = document.getElementById('modal-company-logo');
      logoEl.textContent = job.initials;
      logoEl.style.background = job.logoBg;

      document.getElementById('modal-ctc').textContent = `₹ ${job.packageLPA.toFixed(1)} LPA`;
      document.getElementById('modal-min-cgpa').textContent = `${job.minCGPA.toFixed(1)} / 10`;
      document.getElementById('modal-branches').textContent = job.allowedBranches.join(', ');
      document.getElementById('modal-deadline').textContent = new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      document.getElementById('modal-job-desc').textContent = job.desc;

      // Verdict Box
      const verdictEl = document.getElementById('modal-eligibility-verdict');
      if (evalRes.isCracked) {
        verdictEl.className = 'eligibility-verdict-box banner-cracked';
        verdictEl.innerHTML = `
          <strong>Placement Offer Extended! 🎉</strong> You cleared all interview rounds for this company.
        `;
      } else if (evalRes.isApplied) {
        verdictEl.className = 'eligibility-verdict-box banner-applied';
        verdictEl.innerHTML = `
          <strong>Application Active:</strong> You have submitted your candidature. Current status: ${evalRes.application.statusText}.
        `;
      } else if (evalRes.isEligible) {
        verdictEl.className = 'eligibility-verdict-box banner-eligible';
        verdictEl.innerHTML = `
          <strong>You are 100% Eligible!</strong> Your CGPA (${this.store.student.cgpa.toFixed(1)}), degree branch, and verified certifications meet all requirements.
        `;
      } else if (evalRes.isPartial) {
        verdictEl.className = 'eligibility-verdict-box banner-partial';
        verdictEl.innerHTML = `
          <strong>Partially Eligible:</strong> Your CGPA and branch qualify, but you are missing: <em>${evalRes.certsMissing.join(', ')}</em>. Add this certification to achieve full eligibility.
        `;
      } else {
        verdictEl.className = 'eligibility-verdict-box banner-ineligible';
        verdictEl.innerHTML = `
          <strong>Currently Ineligible:</strong> ${evalRes.reasons.join(' | ')}.
        `;
      }

      // Certifications List
      const certListEl = document.getElementById('modal-cert-list');
      certListEl.innerHTML = '';
      if (job.requiredCerts && job.requiredCerts.length > 0) {
        job.requiredCerts.forEach(cert => {
          const isMatched = evalRes.certsMatched.includes(cert);
          const pill = document.createElement('span');
          pill.className = `cert-req-tag ${isMatched ? 'cert-matched' : 'cert-missing'}`;
          pill.innerHTML = `${isMatched ? '✓' : '✕'} ${cert} ${isMatched ? '(Verified in your profile)' : '(Required - Not in your profile)'}`;
          certListEl.appendChild(pill);
        });
      } else {
        certListEl.innerHTML = '<span class="text-muted">No mandatory industry certification required.</span>';
      }

      // Selection Stepper
      const stepperEl = document.getElementById('modal-rounds-stepper');
      stepperEl.innerHTML = '';
      const roundsList = document.createElement('div');
      roundsList.style.display = 'flex';
      roundsList.style.flexDirection = 'column';
      roundsList.style.gap = '8px';
      
      job.rounds.forEach((round, idx) => {
        const item = document.createElement('div');
        item.style.fontSize = '0.86rem';
        item.style.padding = '8px 12px';
        item.style.background = '#f8fafc';
        item.style.border = '1px solid #e2e8f0';
        item.style.borderRadius = 'var(--radius-sm)';
        item.innerHTML = `<strong>Round ${idx + 1}:</strong> ${round}`;
        roundsList.appendChild(item);
      });
      stepperEl.appendChild(roundsList);

      // Apply button state
      const applyBtn = document.getElementById('btn-modal-apply');
      if (evalRes.isApplied) {
        applyBtn.textContent = 'Already Applied';
        applyBtn.disabled = true;
      } else {
        applyBtn.textContent = evalRes.isEligible ? 'Submit Application' : 'Apply Anyway (Conditional Review)';
        applyBtn.disabled = false;
      }

      this.jobDetailsModal.classList.remove('hidden');
      this.activeModal = this.jobDetailsModal;
    }

    openProfileModal() {
      const student = this.store.student;
      document.getElementById('input-student-name').value = student.name;
      document.getElementById('input-roll-no').value = student.rollNo;
      document.getElementById('input-department').value = student.department;
      document.getElementById('input-grad-year').value = student.gradYear;
      document.getElementById('input-cgpa').value = student.cgpa;
      document.getElementById('cgpa-val-preview').textContent = student.cgpa.toFixed(1);
      document.getElementById('input-backlogs').value = String(student.backlogs);

      // Render Checkboxes for Certifications
      const certTogglesContainer = document.getElementById('profile-cert-toggles');
      certTogglesContainer.innerHTML = '';

      ALL_CERT_OPTIONS.forEach((certName) => {
        const isChecked = this.store.hasCertification(certName);
        const label = document.createElement('label');
        label.className = 'cert-toggle-box';
        label.innerHTML = `
          <input type="checkbox" name="student_certs" value="${certName}" ${isChecked ? 'checked' : ''}>
          <span>${certName}</span>
        `;
        certTogglesContainer.appendChild(label);
      });

      this.studentProfileModal.classList.remove('hidden');
      this.activeModal = this.studentProfileModal;
    }

    saveProfileChanges() {
      const name = document.getElementById('input-student-name').value;
      const rollNo = document.getElementById('input-roll-no').value;
      const department = document.getElementById('input-department').value;
      const gradYear = document.getElementById('input-grad-year').value;
      const cgpa = document.getElementById('input-cgpa').value;
      const backlogs = document.getElementById('input-backlogs').value;

      const checkedCertEls = document.querySelectorAll('input[name="student_certs"]:checked');
      const selectedCertTitles = Array.from(checkedCertEls).map(el => el.value);

      this.store.updateStudentProfile({
        name,
        rollNo,
        department,
        gradYear,
        cgpa,
        backlogs,
        selectedCertTitles
      });

      this.showToast('Placement profile updated! Job eligibility badges re-calculated.', 'success');
      this.closeModal();
      this.renderAll();
    }

    openAddCertModal(prefillTitle = '') {
      const input = document.getElementById('cert-name');
      if (prefillTitle) input.value = prefillTitle;
      this.addCertModal.classList.remove('hidden');
      this.activeModal = this.addCertModal;
    }

    handleCreateCertification() {
      const title = document.getElementById('cert-name').value;
      const issuer = document.getElementById('cert-issuer').value;
      const date = document.getElementById('cert-date').value;
      const credId = document.getElementById('cert-id').value;

      this.store.addCertification({ title, issuer, date, credId });
      this.showToast(`Verified credential "${title}" added to profile!`, 'success');
      this.closeModal();
      this.renderAll();
    }

    openPostJobModal() {
      // Set default deadline to 2 weeks from now
      const d = new Date();
      d.setDate(d.getDate() + 14);
      document.getElementById('new-job-deadline').value = d.toISOString().split('T')[0];

      this.postJobModal.classList.remove('hidden');
      this.activeModal = this.postJobModal;
    }

    handleCreateJob() {
      const company = document.getElementById('new-job-company').value;
      const title = document.getElementById('new-job-title').value;
      const category = document.getElementById('new-job-category').value;
      const packageLPA = document.getElementById('new-job-package').value;
      const minCGPA = document.getElementById('new-job-cgpa').value;
      const deadline = document.getElementById('new-job-deadline').value;
      const certsRaw = document.getElementById('new-job-certs').value;
      const desc = document.getElementById('new-job-desc').value;

      const requiredCerts = certsRaw
        ? certsRaw.split(',').map(s => s.trim()).filter(Boolean)
        : [];

      this.store.addJob({
        company,
        title,
        category,
        packageLPA,
        minCGPA,
        deadline,
        requiredCerts,
        desc
      });

      this.showToast(`Campus recruitment drive for ${company} published!`, 'success');
      this.closeModal();
      this.switchView('jobs');
      this.renderAll();
    }

    openOfferModal(job) {
      this.selectedJobForModal = job;
      const app = this.store.applied.find(a => a.jobId === job.id);
      if (!app || !app.offerDetails) return;

      document.getElementById('offer-company-title').textContent = job.company;
      document.getElementById('offer-student-name').textContent = this.store.student.name;
      document.getElementById('offer-role-title').textContent = job.title;
      document.getElementById('offer-ctc-display').textContent = `₹ ${app.offerDetails.ctc.toFixed(2)} LPA`;
      document.getElementById('offer-base-display').textContent = `₹ ${app.offerDetails.base} LPA`;
      document.getElementById('offer-bonus-display').textContent = `₹ ${app.offerDetails.bonus} LPA`;
      document.getElementById('offer-location-display').textContent = app.offerDetails.location;

      const btnAccept = document.getElementById('btn-accept-offer');
      if (app.offerDetails.accepted) {
        btnAccept.textContent = '✓ Offer Accepted';
        btnAccept.disabled = true;
      } else {
        btnAccept.textContent = 'Accept Offer Letter';
        btnAccept.disabled = false;
      }

      this.offerLetterModal.classList.remove('hidden');
      this.activeModal = this.offerLetterModal;
    }

    handleApplyJob(jobId) {
      const res = this.store.applyForJob(jobId);
      if (res.success) {
        this.showToast(res.message, 'success');
        this.renderAll();
      } else {
        this.showToast(res.message, 'warning');
      }
    }

    closeModal() {
      if (this.activeModal) {
        this.activeModal.classList.add('hidden');
        this.activeModal = null;
      }
      document.querySelectorAll('.modal-overlay').forEach(el => el.classList.add('hidden'));
    }

    showToast(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.innerHTML = `
        <span>${message}</span>
      `;
      this.toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    celebrateConfetti() {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
          });
        }, 250);
      }
    }
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new PlacementApp();
  });
})();
