export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'active',    label: 'Active Tasks', icon: 'list' },
  { id: 'progress',  label: 'In Progress',  icon: 'clock' },
  { id: 'completed', label: 'Completed',    icon: 'check' },
  { id: 'flagged',   label: 'Flagged',      icon: 'flag' },
];

export const INITIAL_TODOS = [
  { id: 1, text: 'Review project proposal',    time: '9:00 AM',  completed: false, flagged: true,  category: 'Work',     progress: 65 },
  { id: 2, text: 'Team sync meeting',          time: '11:00 AM', completed: false, flagged: false, category: 'Meetings', progress: 0  },
  { id: 3, text: 'Update quarterly report',    time: '1:00 PM',  completed: false, flagged: true,  category: 'Reports',  progress: 40 },
  { id: 4, text: 'Code review for PR #142',    time: '3:00 PM',  completed: false, flagged: false, category: 'Dev',      progress: 80 },
  { id: 5, text: 'Design system audit',        time: '4:30 PM',  completed: true,  flagged: false, category: 'Design',   progress: 100},
  { id: 6, text: 'Client call — weekly check', time: '10:00 AM', completed: true,  flagged: false, category: 'Meetings', progress: 100},
  { id: 7, text: 'Deploy staging environment', time: '5:00 PM',  completed: false, flagged: true,  category: 'Dev',      progress: 20 },
];

export const CATEGORIES = ['Work', 'Meetings', 'Reports', 'Dev', 'Design', 'Personal'];
export const CATEGORY_COLORS = {
  Work:     { bg: '#dcfce7', color: '#16a34a' },
  Meetings: { bg: '#dbeafe', color: '#2563eb' },
  Reports:  { bg: '#fef9c3', color: '#ca8a04' },
  Dev:      { bg: '#ede9fe', color: '#7c3aed' },
  Design:   { bg: '#fce7f3', color: '#db2777' },
  Personal: { bg: '#ffedd5', color: '#ea580c' },
};
