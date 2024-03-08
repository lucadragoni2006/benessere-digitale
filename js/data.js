export function convertTimeStringToNumber(timeString) {
    const [hoursStr, minutesStr] = timeString.split(' ');
    const hours = Number(hoursStr.slice(0, -1));
    const minutes = Number(minutesStr.slice(0, -1)) / 60;
    return hours + minutes;
}

export const days = [
    [
        { name: 'Instagram', usage: '1h 0m'},
        { name: 'TikTok', usage: '2h 0m' },
        { name: 'Clash of Clans', usage: '0h 45m' },
        { name: 'YouTube', usage: '1h 38m' },
        { name: 'Google Classroom', usage: '0h 20m' },
        { name: 'WhatsApp', usage: '1h 37m' },
        { name: 'Chess', usage: '0h 42m' },
        { name: 'Gmail', usage: '0h 10m' },
    ],
    [
        { name: 'Netflix', usage: '1h 32m' },
        { name: 'Clash of Clans', usage: '0h 45m' },
        { name: 'Amazon', usage: '0h 14m' },
        { name: 'YouTube', usage: '1h 30m' },
        { name: 'Gmail', usage: '0h 33m' },
        { name: 'Chrome', usage: '1h 4m' },
        { name: 'Tiktok', usage: '0h 53' },
        { name: 'WhatsApp', usage: '1h 37m' },
        { name: 'Chess', usage: '0h 26m' },
    ],
    [
        { name: 'Snapchat', usage: '0h 18m' },
        { name: 'Tiktok', usage: '1h 39h' },
        { name: 'Whatsapp', usage: '0h 30m' },
        { name: 'Instagram', usage: '1h 3m' },
        { name: 'Amazon', usage: '0h 36m' },
        { name: 'Netflix', usage: '1h 05m' },
    ],
    [
        { name: 'Meet', usage: '1h 21m' },
        { name: 'Zoom', usage: '2h 0m' },
        { name: 'Microsoft Teams', usage: '3h 30m' },
        { name: 'Google Meet', usage: '3h 30m' },
        { name: 'Cisco Webex', usage: '3h 30m' },
        { name: 'Slack', usage: '3h 30m' },
        { name: 'Skype', usage: '3h 30m' },
        { name: 'Discord', usage: '3h 30m' },
        { name: 'Trello', usage: '3h 30m' },
    ],
    [
        { name: 'Zoom', usage: '1h 30m' },
        { name: 'Zoom', usage: '2h 0m' },
        { name: 'Microsoft Teams', usage: '3h 30m' },
        { name: 'Google Meet', usage: '3h 30m' },
        { name: 'Cisco Webex', usage: '3h 30m' },
        { name: 'Slack', usage: '3h 30m' },
        { name: 'Skype', usage: '3h 30m' },
        { name: 'Discord', usage: '3h 30m' },
        { name: 'Trello', usage: '3h 30m' },
    ],
    [
        { name: 'Zoom', usage: '1h 30m' },
        { name: 'Zoom', usage: '2h 0m' },
        { name: 'Microsoft Teams', usage: '3h 30m' },
        { name: 'Google Meet', usage: '3h 30m' },
        { name: 'Cisco Webex', usage: '3h 30m' },
        { name: 'Slack', usage: '3h 30m' },
        { name: 'Skype', usage: '3h 30m' },
        { name: 'Discord', usage: '3h 30m' },
        { name: 'Trello', usage: '3h 30m' },
    ],
    [
        { name: 'Zoom', usage: '1h 30m' },
        { name: 'Zoom', usage: '2h 0m' },
        { name: 'Microsoft Teams', usage: '3h 30m' },
        { name: 'Google Meet', usage: '3h 30m' },
        { name: 'Cisco Webex', usage: '3h 30m' },
        { name: 'Slack', usage: '3h 30m' },
        { name: 'Skype', usage: '3h 30m' },
        { name: 'Discord', usage: '3h 30m' },
        { name: 'Trello', usage: '3h 30m' },
    ],
];