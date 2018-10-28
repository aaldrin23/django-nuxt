export default [
	{ title: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
	{
		title: 'Employee',
		icon: 'people',
		prefix: '/employee',
		children: [
			{ title: 'Master List', icon: 'list', to: '/list/' },
			{ title: 'Scheduling', icon: 'date_range', to: '/scheduling/' },
			{ title: 'Timesheet', icon: 'vertical_split', to: '/timesheet/' },
			{ title: 'Overtime', icon: 'access_time', to: '/overtime/' },
			{
				title: 'Official Business',
				icon: 'access_time',
				to: '/official-business/'
			},
			{ title: 'Leaves', icon: 'calendar_today', to: '/leaves/' }
		]
	},
	{
		title: 'Organization',
		icon: 'bubble_chart',
		prefix: '/organization',
		children: [
			{ title: 'Departments', icon: 'business', to: '/departments' },
			{ title: 'Positions', icon: 'work', to: '/positions' }
		]
	},
	{
		title: 'Payroll',
		icon: 'attach_money',
		prefix: '/payroll',
		children: [
			{ title: 'Banks', icon: 'account_balance', to: '/banks' },
			{ title: 'Payrolls', icon: 'receipt', to: '/payrolls' },
			{ title: 'Contributions', icon: 'payment', to: '/contributions' },
			{ title: 'Reports', icon: 'file_copy', to: '/reports' }
		]
	},
	{
		title: 'Settings',
		icon: 'settings',
		prefix: '/settings',
		children: [
			{ title: 'Day Types', icon: 'today', to: '/day-types' },
			{ title: 'Paycodes', icon: 'folder_shared', to: '/paycodes' },
			{ title: 'Rates', icon: 'attach_money', to: '/rates' },
			{ title: 'Tax Rules', icon: 'monetization_on', to: '/tax-rules' },
			{ title: 'Thresholds', icon: 'access_alarm', to: '/thresholds' },
			{
				title: 'Email Templates',
				icon: 'description',
				to: '/templates/email'
			},
			{
				title: 'Schedule Templates',
				icon: 'calendar_today',
				to: '/templates/schedule'
			},
			{
				title: 'Separation codes',
				icon: 'list',
				to: '/separation-codes'
			},
			{ title: 'System Permissions', icon: 'security', to: '/permission' }
		]
	},
	{
		title: 'Administration',
		icon: 'security',
		prefix: '/administration',
		children: [{ title: 'System Users', icon: 'people', to: '/users/' }]
	},
	{ title: 'About', icon: 'question_answer', to: '/about' }
];
