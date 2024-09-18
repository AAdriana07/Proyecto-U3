var ctx = document.getElementById('barchart').getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ep.95:"La Batalla Decisiva"', 'Ep.68:"La LLegada de los Saiyajin"', 'Ep.82:"La Fusión de los Gotenks"', 'Ep.84:"El Poder del Super Saiyan 3"', 'Ep.72:"La Guerra de los Guerreros del Espacio"', 'Ep.91:"La Muerte de Freezer"'],
        datasets: [{
            label: '# Episodios más vistos',
            data: [20, 16, 12, 11, 9, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ], 
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});