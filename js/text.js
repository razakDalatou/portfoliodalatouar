
        // Simulez les données envoyées par le backend (vous pouvez générer ces données en PHP ou autre)
        // const dataSet = {
        //     mois: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        //     revenus: [10000, 12000, 15000, 8000, 9500, 11000, 14000, 13000, 12500, 15000, 16000, 20000],
        //     depenses: [7000, 8000, 9000, 5000, 6000, 7000, 8500, 8700, 8000, 9500, 10000, 12000]
        // };

        // // Configuration du graphique
        // const ctx = document.getElementById('barChart');
        // new Chart(ctx, {
        //     type: 'bar', // Graphique à barres
        //     data: {
        //         labels: dataSet.mois, // Libellés de l'axe X (mois)
        //         datasets: [
        //             {
        //                 label: 'Revenus',
        //                 data: dataSet.revenus, // Données pour les revenus
        //                 backgroundColor: 'rgba(75, 192, 192, 0.8)', // Couleur des barres pour les revenus
        //             },
        //             {
        //                 label: 'Dépenses',
        //                 data: dataSet.depenses, // Données pour les dépenses
        //                 backgroundColor: 'rgba(255, 99, 132, 0.8)', // Couleur des barres pour les dépenses
        //             },
        //         ]
        //     },
        //     options: {
        //         responsive: true,
        //         maintainAspectRatio: false,
        //         plugins: {
        //             legend: {
        //                 position: 'top', // Position de la légende
        //             },
        //         },
        //         scales: {
        //             x: {
        //                 title: {
        //                     display: true,
        //                     text: 'Mois',
        //                 }
        //             },
        //             y: {
        //                 title: {
        //                     display: true,
        //                     text: 'Montant (FCFA)',
        //                 },
        //                 beginAtZero: true // Commencer l'axe Y à 0
        //             }
        //         }
        //     }
        // });