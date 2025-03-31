function showStep(stepId) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });

    // Show the selected step
    document.getElementById(stepId).classList.remove('hidden');
}

// List of watch brands categorized by value
const watchDatabase = {
    highValue: [
        "Rolex", "Patek Philippe", "Audemars Piguet", "Cartier", "Omega",
        "Vacheron Constantin", "Jaeger-LeCoultre", "IWC Schaffhausen",
        "Panerai", "Tudor", "Breitling", "Grand Seiko", "TAG Heuer", "A. Lange & Söhne", "Alain Silberstein", "Alpina", "Angelus", "Anonimo", "AnOrdain Watches", "Aristo Vollmer", "Armin Strom", "Arnold & Son", "Ateliers deMonaco", "Audemars Piguet", "Autodromo", "Autran & Viala", "Azimuth", "Backes & Strauss", "Ball Watch Company", "Ballast", "Baltic Watches", "Baume & Mercier", "Bausele", "Bell & Ross", "Berd Vay’e", "Biatec", "Blancpain", "Bovet 1822", "Breguet", "Breitling", "Bremont", "Bruno Söhnle", "Bulgari", "Cabestan", "Caravelle New York", "Carl F. Bucherer", "Cartier", "Casio G-Shock", "Chanel", "Chopard", "Christophe Claret", "Christopher Ward", "Cimier", "Citizen", "Claude Bernard", "Clerc", "Corum", "Cuervo y Sobrinos", "Czapek & Cie", "Dan Henry Watches", "Daniel Roth", "De Bethune", "De Grisogono", "Delma", "Dietrich", "Dior", "Dornblüth & Sohn", "Doxa", "Dubey & Schaldenbrand", "Ebel", "Eberhard & Co.", "Edox", "Elliot Brown", "Enicar", "Epos", "Eterna", "Eterna Matic", "F.P Journe", "Fabergé", "Farer Universal", "Ferdinand Berthoud", "Fiona Krüger", "Formex Watches", "Fortis", "Franck Muller", "Frederique Constant", "Furlan Marri", "Gavox", "Gerald Genta", "Girard-Perregaux", "Glashütte Original", "Glycine", "GoS Watches", "Graff", "Graham Watches", "Grand Seiko", "Greubel Forsey", "Grönefeld", "H. Moser & Cie", "Habring²", "Halios", "Hanhart", "Harry Winston", "Hautlence", "Hermès", "Hublot", "HYT", "Ikepod", "IWC Schaffhausen", "Jacob & Co.", "Jaeger-LeCoultre", "Jager", "Jaquet Droz", "Jean Dunand", "JeanRichard", "Junghans", "Junghans Meister", "Kari Voutilainen", "Kienzle Uhren", "Kobold", "Konstantin Chaykin", "Kudoke", "Kurono Tokyo", "Laco", "Lang & Heyne", "Laurent Ferrier", "Laventure Watches", "Limes Watches", "Linde Werdelin", "Lip Watches", "Locman Italy", "Longines", "Lorier Watches", "Louis Moinet", "Louis Vuitton", "Ludovic Ballouard", "Luminox", "Manufacture Royale", "Marathon Watch Company", "Marloe Watch Company", "Martenero Watches", "Maurice Lacroix", "MB&F", "MCT Watches (Manufacture Contemporaine du Temps)", "Meistersinger", "Mido Watches", "Ming Watches", "Mondaine Helvetica", "Montblanc", "Moritz Grossmann", "Mühle Glashütte", "Nivada Grenchen", "NOMOS Club Campus (specific line)", "Nomos Glashütte", "Norqain", "Oak & Oscar", "Ocean Crawler Watches", "Omega", "Ophion Watches", "Oris", "Panerai", "Parmigiani Fleurier", "Patek Philippe", "Perrelet Watches", "Philippe Dufour", "Piaget", "Porsche Design", "Praesidus Watches", "Rado", "Ralph Lauren Watches", "Rebellion Timepieces", "Reservoir Watches", "Ressence", "RGM Watch Company (USA)", "Richard Mille", "RJ Watches (Romain Jerome)", "Roger Dubuis", "Roland Iten", "Rolex", "Romain Gauthier", "Schaumburg Watch", "Schwarz Etienne", "Seiko Credor", "Serica Watches", "Sinn Flieger Chronographs", "Sinn Spezialuhren", "Speake-Marin", "Stefano Ricci Watches", "Stowa", "Stowa Marine Original", "Studio Underd0g Watches", "TAG Heuer", "Techné Instruments", "Timex", "Tissot", "Traser H3", "Tudor", "Ulysse Nardin", "Unimatic Watches", "Union Glashütte", "Urban Jürgensen", "Urwerk", "Vacheron Constantin", "Vaer Watches", "Van Cleef & Arpels", "Van Der Klaauw", "Vero Watches", "Vianney Halter", "Victorinox Swiss Army", "Vortic Watch Company", "Vostok Europe", "Vulcain", "Weiss Watch Company", "Weiss Watch Company (USA)", "Xeric Watches", "Xetum", "Yema", "Zelos Watches", "Zenith", "Zodiac", "Zodiac Aerospace GMT"
        "Alpina", "AnOrdain", "Astor+Banks", "Autodromo", "Ball", "Baltany", "Baltic", "Baume & Mercier", "Bell & Ross", "Braun", "Bravur", "Bremont", "Brew", "Bulova", "Burberry", "Carl F. Bucherer", "Casio", "Certina", "Christopher Ward", "Citizen", "COACH", "Dan Henry", "Doxa", "Elliot Brown", "Emporio Armani", "Eterna", "Farer", "Filson", "Formex", "Fossil", "Frederique Constant", "Glycine", "Halios", "Hamilton", "Helm", "Hemel", "Hugo Boss", "Invicta", "Jack Mason", "Junghans", "Kate Spade", "Laco", "Longines", "Lorier", "Luminox", "Marathon", "Maurice Lacroix", "Meistersinger", "Merkur", "Michael Kors", "Mido", "MKII", "Mondaine", "Montblanc", "Movado", "Nodus", "Nomos Glashütte", "NTH", "Oak & Oscar", "Ocean Crawler", "Ollech & Wajs", "Orient", "Oris", "Phoibos", "Rado", "Raven", "Raymond Weil", "San Martin", "Seiko", "Serica", "Shinola", "Sinn Spezialuhren", "Skagen", "Spinnaker", "Squale", "Steinhart", "Stowa", "Studio Underd0g", "Sugess", "TAG Heuer", "Timex", "Tissot", "Tommy Hilfiger", "Tory Burch", "Traska", "Undone", "Unimatic", "Vaer", "Victorinox", "Vostok", "Weiss", "Yema", "Zelos", "Zodiac"

        // Add more high-value brands here...
    ],
    lowValue: [
        "Timex", "Casio", "Swatch", "Fossil", "Skagen", "Accurist Quartz", "Accutime", "Addiesdive", "Adidas", "Advance", "Akribos XXIV", "Android", "Anne Klein", "Anne Klein Sport", "Aposon", "Armani Exchange", "Armitron", "August Steiner", "AUREOLE", "Avia", "Balenciaga", "Baltany", "bebe", "Bertucci", "Bewell", "Binzi", "Boccia Titanium Quartz", "Braun", "Breo", "Britix", "Bulova", "Burberry", "Burei", "CakCity", "Caravelle", "Carnival", "Chico's", "Chrome", "Citizen", "Cluse", "Cluse La Bohème", "COACH", "Crosshatch", "Curren", "Dakota", "Daniel Wellington", "Daniel Wellington Classic", "Davis", "Diesel", "DKNY", "Elgin", "Empire", "Emporio Armani", "Endura", "Escapement Time", "Esperanto", "Esprit", "Everlast", "Excellanc", "Eyki", "Ezon", "Fanmis", "Filippo Loreti", "Flud", "FNGEEN", "Folio", "Forester", "Forsining", "Fossil", "Freestyle", "Geneva", "Geneva Platinum", "Guess", "Honhx", "Hugo Boss", "HyperGrand", "Ice-Watch", "Infantry", "INOX", "Invicta", "Jaragar", "Johan Eric", "Joshua & Sons", "Kapten & Son", "Kate Spade", "Kenneth Cole Reaction", "Komono", "Komono Winston", "Lacoste", "Lige", "Limit", "Lorus", "Louis Bolle", "Lucien Piccard", "Marc Ecko", "Massini", "Mayak", "Megir", "Meister Anker", "Merkur", "Michael Kors", "Moschino", "MVMT", "MVMT Chronograph", "Naviforce", "Nine West", "Nixon", "Nixon Time Teller", "Ohsen", "Olivia Burton", "Olivia Burton Floral", "Orient", "Oulm", "Pagani Design", "Pasnew", "Paulareis", "Peugeot", "Philip Stein", "Pierre Cardin", "Playboy", "Pulsar", "Q&Q", "Radley", "Reactor", "Reebok", "Reflex Active", "Regent", "Relic by Fossil", "Revelot", "Rocawear", "Rodana", "Rosefield", "Rosefield Bowery", "Rotary Quartz", "Ruimas", "Seiko", "Sekonda", "Seksy", "Shark Sport", "Signal", "Simplify", "Sinobi", "Skagen", "Skagen Minimalist", "Skmei", "Smael", "SOKI", "Solo", "Starking", "SteelDive", "Steve Madden", "Storm", "Stührling", "Sugess", "Swatch", "Swiss Legend", "Tevise", "Timex", "Tokyobay", "TOMI", "Tommy Hilfiger", "Tonino Lamborghini", "Tory Burch", "Tourist", "Triwa", "U.S. Polo Assn.", "Unlisted by Kenneth Cole", "Vera Bradley", "Vestal", "Vincero Collective", "Vostok", "Weide", "Wenger", "Wilson", "Winner", "Wwoor", "Xonix", "Yazole"

        // Add more low-value brands here...
    ],
    mixedValue: {
        Bulova: {
            highValueModels: ["Precisionist", "Marine Star", "Accutron"],
            lowValueModels: ["Classic Quartz", "Crystal Collection"],
            identificationTips: `
                High-value models include Precisionist, Marine Star, and Accutron.
                Low-value models include Classic Quartz and Crystal Collection.
                You can differentiate them by checking movement type, case material, or historical significance.
            `
        },
        Casio: {
            highValueModels: ["G-Shock Limited Editions", "Pro Trek Series"],
            lowValueModels: ["F91W", "A158WA"],
            identificationTips: `
                High-value models include G-Shock Limited Editions and Pro Trek Series.
                Low-value models include basic digital watches like F91W and A158WA.
                Look for advanced features like GPS or solar charging in high-value models.
            `
        },
        Seiko: {
            highValueModels: ["Grand Seiko", "Prospex Diver Watches"],
            lowValueModels: ["Seiko Quartz", "Seiko 5"],
            identificationTips: `
                High-value models include Grand Seiko and Prospex Diver Watches.
                Low-value models include entry-level quartz watches like Seiko Quartz or Seiko 5.
                Look for premium movements or vintage chronographs in high-value models.
            `
        },
        Citizen: {
            highValueModels: ["Eco-Drive Titanium Watches", "Promaster Series"],
            lowValueModels: ["Basic Quartz Watches"],
            identificationTips: `
                High-value models include Eco-Drive Titanium Watches and Promaster Series.
                Low-value models include basic quartz watches without advanced features.
                Look for Eco-Drive technology in high-value models.
            `
        },
        Orient: {
            highValueModels: ["Orient Star", "Vintage Chronographs"],
            lowValueModels: ["Basic Automatic Watches"],
            identificationTips: `
                High-value models include Orient Star and vintage chronographs.
                Low-value models include basic automatic watches without premium finishes.
                Look for higher-quality movements in Orient Star models.
            `
        }
    }
};

// Function to normalize input (handles typos and partial matches)
function normalizeInput(input) {
    return input.trim().toLowerCase();
}

// Function to find close matches in the database
function findCloseMatches(input) {
    const normalizedInput = normalizeInput(input);
    const matches = [];

    // Check highValue brands
    watchDatabase.highValue.forEach(brand => {
        if (brand.toLowerCase().includes(normalizedInput)) {
            matches.push(brand);
        }
    });

    // Check lowValue brands
    watchDatabase.lowValue.forEach(brand => {
        if (brand.toLowerCase().includes(normalizedInput)) {
            matches.push(brand);
        }
    });

    // Check mixedValue brands
    Object.keys(watchDatabase.mixedValue).forEach(brand => {
        if (brand.toLowerCase().includes(normalizedInput)) {
            matches.push(brand);
        }
    });

    return matches;
}

// Main search function
function searchWatch() {
    const brandName = document.getElementById('brand-name').value.trim();

    if (!brandName) {
        alert("Please enter a brand name.");
        return;
    }

    const resultsDiv = document.getElementById("search-results");
    let message;

    // Check if the brand is in mixedValue first
    if (watchDatabase.mixedValue[brandName]) {
        const brandInfo = watchDatabase.mixedValue[brandName];
        message = `
            <p><strong>${brandName}</strong> has both high-value and low-value models.</p>
            <p>${brandInfo.identificationTips}</p>
            <p><strong>High-Value Models:</strong> ${brandInfo.highValueModels.join(", ")}</p>
            <p><strong>Low-Value Models:</strong> ${brandInfo.lowValueModels.join(", ")}</p>
        `;
    } 
    // Then check if the brand is in highValue
    else if (watchDatabase.highValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a high-value brand! Set this watch aside for further research or listing.</p>`;
    } 
    // Finally, check if the brand is in lowValue
    else if (watchDatabase.lowValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a low-value brand and may not be worth setting aside.</p>`;
    } 
    // If no match is found, suggest close matches
    else {
        const closeMatches = findCloseMatches(brandName);

        if (closeMatches.length > 0) {
            message = `<p><strong>${brandName}</strong> is not an exact match, but here are some close matches:</p>`;
            message += `<ul>${closeMatches.map(match => `<li>${match}</li>`).join("")}</ul>`;
            message += `<p>Consider researching these brands further.</p>`;
        } else {
            message = `<p><strong>${brandName}</strong> is not in our database. Consider researching further.</p>`;
        }
    }

    resultsDiv.innerHTML = message;
    resultsDiv.classList.remove("hidden");
}
