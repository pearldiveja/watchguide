// List of watch brands categorized by value
const watchDatabase = {
    highValue: [
        "Rolex", "Patek Philippe", "Audemars Piguet", "Cartier", "Omega", 
        "Vacheron Constantin", "Jaeger-LeCoultre", "IWC Schaffhausen", 
        "Panerai", "Tudor", "Breitling", "Grand Seiko", "TAG Heuer", 
        "Richard Mille", "FP Journe", "Hublot", "Chopard", 
        "Parmigiani Fleurier", "Zenith", "Breguet", "Longines", 
        "Maurice Lacroix", "Oris", "Sinn Watches", "Bell & Ross", 
        "Norqain Watches", "Bremont Watches", "Alpina Watches", 
        "Nomos Glashütte", "Rado", "Universal Genève", 
        "Heuer (pre-TAG era)", "Bulova Accutron (specific models)", 
        "Hamilton (vintage models)", "Seiko (specific models like SKX007, Prospex, Grand Seiko)", 
        "Akrivia Watches", "Laurent Ferrier Watches", 
        "De Bethune Watches", "Fortis Watches (e.g., Flieger series)", 
        "Glycine Watches (e.g., Airman series)", 
        "Ming Watches (modern boutique brand)", 
        "Baltic Watches (vintage-inspired designs)", 
        "Blancpain", "Baume & Mercier", 
        "Ulysse Nardin", "Corum", 
        "Eterna", "Arnold & Son", 
        "Ball Watches", "Girard-Perregaux",
        "Glashütte Original",
        "Vulcain (e.g., Cricket models)",
        "Doxa (e.g., Sub models)",
        "Certina (higher-end models)",
        "Favre-Leuba",
        "Montblanc (e.g., Timewalker series)",
        "Frederique Constant (higher-end models)",
        "Seagull 1963 (collectible Chinese chronographs)",
        "Atlantic Worldmaster (vintage models)",
        "Alpina Startimer Pilot watches",
        "Victorinox Swiss Army watches (specific mechanical models)",
        "Stowa Flieger watches",
        "Anonimo watches",
        "MeisterSinger single-hand watches",
        "Junghans Max Bill watches",
        "Marathon watches (military-grade tool watches)",
        "Laco Pilot watches"
    ],
    lowValue: [
        "Timex", "Casio", "Swatch", "Fossil", "Skagen", "Invicta", 
        "Lorus", "Alba", "Addiesdive", "Berny", "Pulsar", 
        "HMT Watches", "Waltham (basic models)", "Obaku", 
        "Armitron", "Relic by Fossil", "Anne Klein", 
        "Peugeot Watches", "Geneva Watches", "Caravelle by Bulova",
        "Stuhrling Original (entry-level)", "Sekonda", 
        "Nautica Watches (basic models)", "DKNY Watches",
        "Guess Watches (basic models)", "Diesel Watches (basic models)",
        "Michael Kors Watches (entry-level)", 
        "Tommy Hilfiger Watches (entry-level)", 
        "Bulova Quartz (basic models)", 
        "Citizen Quartz (entry-level)", 
        "Seiko Quartz (entry-level)", 
        "Casio G-Shock (basic models like DW5600)", 
        "Casio Duro MDV106", 
        "Casio F-91W", 
        "Casio A158WA-1DF", 
        "Casio AE1200WH-1A", 
        "Timex Weekender", 
        "Timex Expedition Scout", 
        "Timex Easy Reader",
        "Timex Ironman Classic 30",
        "Timex T2H281",
        "Lorus Field Watches",
        "Alba Solar AEFD530",
        "Alba Solar AEFD529",
        "Addiesdive Quartz Diver",
        "Berny Railway Watch",
        "Pulsar Solar Watches",
        "Armitron Sport Watches",
        "Relic Sport Watches",
        "Anne Klein Fashion Watches","Miltado", "Pagani Design", "Steeldive", "Escapement Time", "Bertucci",
        "Sanda", "Bergmann", "Sekonda Xpose", "Daniel Wellington", "Vostok",
        "Komandirskie", "Seagull", "Beijing Watch Factory", "Feice", "MarchLAB",
        "Q&Q by Citizen", "Naviforce", "Curren", "MVMT", "Winner",
        "Tevise", "Jaragar", "Forsining", "Megir", "Yazole",
        "Paulareis", "Benyar", "Nibosi", "Sinobi", "Skmei",
        "Starking", "Cadisen", "Nakzen", "Guanqin", "DOM",
        "Torbollo", "Hannah Martin", "Ochstin", "Bobo Bird", "Infantry",
        "Agelocer", "Brigada", "Sewor", "US Polo Assn. watches", "American Exchange",
        "Ferrari branded watches", "Lamborghini branded watches", "Lotus watches", "Rotary (entry-level)", "Festina (entry-level)",
        "J.Springs", "Fila watches", "New Balance watches", "Champion watches", "Reebok watches",
        "Puma watches", "Lacoste watches", "ESQ by Movado", "Kenneth Cole", "Pierre Cardin watches",
        "Cluse", "Liebeskind", "Charles Vogele", "Akribos", "Perry Ellis watches",
        "Joshua & Sons", "Breda", "Avon watches", "Croton", "River Island watches",
        "Superdry watches", "Jacques Lemans (entry-level)", "Grovana (entry-level)", "Police watches", "Firetrap watches",
        "Kahuna", "Limit", "Accurist (entry-level)", "Ben Sherman watches", "Philip Persio",
        "Chenevard", "Sea-Pro", "Smith & Wesson watches", "Shark watches", "Jeep watches",
        "Cherokee watches", "Krug Baumen", "Slazenger watches", "Duck and Cover watches", "Toy Watch",
        "Lucien Piccard (modern versions)", "Ingersoll (entry level)", "Condor", "Welder", "Jubileum",
        "Momentum (entry-level models)", "Cogito", "Duxot", "Maserati watches", "Jazzmaster (entry-level)"// Add low-value brands here...
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    // Hide all steps except main menu on load
    document.querySelectorAll('.step').forEach(step => {
        if (step.id !== 'main-menu') {
            step.classList.add('hidden');
        } else {
            step.classList.remove('hidden');
        }
    });
});

function showStep(stepId) {
    console.log(`Attempting to show step: ${stepId}`); // Debugging log

    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });

    // Show target step
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.classList.remove('hidden');
        console.log(`Successfully displayed step: ${stepId}`); // Debugging log
    } else {
        console.error(`Step not found: ${stepId}`); // Debugging log
    }
}

function searchWatch() {
    const brandName = document.getElementById('brand-name').value.trim();
    
    if (!brandName) {
        alert("Please enter a brand name.");
        return;
    }

    const resultsDiv = document.getElementById("search-results");
    
    let message;
    
    if (watchDatabase.highValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a high-value brand! Set this watch aside for further research or listing.</p>`;
    } else if (watchDatabase.lowValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a low-value brand and may not be worth setting aside.</p>`;
    } else {
        message = `<p><strong>${brandName}</strong> is not in our database. Consider researching further.</p>`;
    }

    resultsDiv.innerHTML = message;
    resultsDiv.classList.remove("hidden");
}
