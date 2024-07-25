export default function barchart() {
    return {
        category: '',
        period: '',
        open1: false,
        open2: false,
        chartData: [],
        snoepDataMonth: [112, 10, 225, 134, 101, 80, 50, 100, 200, 50, 123, 240],
        frisdrankDataMonth: [100, 20, 225, 134, 101, 80, 50, 100, 200, 50, 123, 200],
        crackerDataMonth: [150, 60, 225, 134, 101, 80, 50, 100, 200, 50, 123, 103],
        snoepDataDay: [4, 12, 19, 2, 13, 16, 22, 100, 200, 50, 123, 103, 112, 10, 225, 134, 101, 80, 50, 100, 200, 50, 123, 103, 112, 10, 225, 134, 101, 80, 50, 100],
        frisdrankDataDay: [4, 12, 19, 2, 13, 16, 22, 100, 200, 50, 123, 103, 112, 10, 225, 134, 101, 80, 50, 100, 200, 50, 123, 103, 112, 10, 225, 134, 101, 80, 50, 100],
        crackerDataDay: [4, 12, 19, 2, 13, 16, 22, 100, 200, 50, 123, 103, 112, 10, 225, 134, 101, 80, 50, 100, 200, 50, 123, 103, 112, 10, 225, 134, 101, 80, 50, 100],
        labels: [],
        labelsMonths: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Juni', 'Juli', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        labelsDays: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        
        // Tooltip related data
        tooltipContent: '',
        tooltipOpen: false,
        tooltipX: 0,
        tooltipY: 0,
        
        init() {
            this.category = 'Snoep';
            this.period = 'Maand';
            this.filter(this.category, this.period);
        },
        toggleDropdown1() {
            this.open1 = !this.open1;
            if (this.open2) this.open2 = false;
        },

        toggleDropdown2() {
            this.open2 = !this.open2;
            if (this.open1) this.open1 = false;
        },

        filter(category, period) {
            this.category = category;
            this.period = period;
            
            if (period === 'Maand') {
                this.labels = this.labelsMonths;
                if (category === 'Snoep') {
                    this.chartData = this.snoepDataMonth;
                } else if (category === 'Frisdrank') {
                    this.chartData = this.frisdrankDataMonth;
                } else if (category === 'Crackers') {
                    this.chartData = this.crackerDataMonth;
                }
            } else if (period === 'Dag') {
                this.labels = this.labelsDays;
                if (category === 'Snoep') {
                    this.chartData = this.snoepDataDay;
                } else if (category === 'Frisdrank') {
                    this.chartData = this.frisdrankDataDay;
                } else if (category === 'Crackers') {
                    this.chartData = this.crackerDataDay;
                }
            }
        },
        // Update the category
        updateCategory(category) {
            this.filter(category, this.period);
            this.toggleDropdown1();
        },
        // Update the period
        updatePeriod(period) {
            this.filter(this.category, period);
            this.toggleDropdown2();
        },
        // Show the tooltip on mouseover
        showTooltip(e) {
            console.log(e);
            this.tooltipContent = e.target.textContent;
            this.tooltipX = e.target.offsetLeft - e.target.clientWidth;
            this.tooltipY = e.target.clientHeight + e.target.clientWidth;
            this.tooltipOpen = true;
        },

        hideTooltip() {
            this.tooltipContent = '';
            this.tooltipOpen = false;
            this.tooltipX = 0;
            this.tooltipY = 0;
        }
    };
}
