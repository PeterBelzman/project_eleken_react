import logo1 from './assets/img/logo1.jpg';
import logo2 from './assets/img/logo2.jpg';
import logo3 from './assets/img/logo3.jpg';
import logo4 from './assets/img/logo4.jpg';

// Object metals

export const metals = {
    gold: {
        color: "#eca750",
        name: "gold"
    },
    platinum: {
        color: "#999999",
        name: "platinum"
    },
    silver: {
        color: "#adc1c4",
        name: "silver"
    },
    bronze: {
        color: "#ab6341",
        name: "bronze"
    },
    catastrophic: {
        color: "#d54a51",
        name: "catastrophic"
    }
};

export const data = [
    {
        logo: logo1,
        // stars: 3,
        company: "insurcom",
        covering: "Health",
        type: "ppo",
        metal: metals.platinum,
        drugs: "$15",
        primaryCareVisits: "$75",
        yearlyDeductible: 6000,
        price: 356
    },
    {
        logo: logo2,
        company: "health ins",
        covering: "All-in-one",
        type: "hmo",
        metal: metals.silver,
        drugs: "$15",
        primaryCareVisits: "$45",
        yearlyDeductible: 4500,
        price: 611
    },
    {
        logo: logo3,
        company: "dentalife",
        covering: "Dental",
        type: "epo",
        metal: metals.gold,
        drugs: "100%",
        primaryCareVisits: "$75",
        yearlyDeductible: 5000,
        price: 283
    },
    {
        logo: logo1,
        company: "insurcom",
        covering: "Vision",
        type: "pos",
        metal: metals.bronze,
        drugs: "100%",
        primaryCareVisits: "$60",
        yearlyDeductible: 2600,
        price: 214
    },
    {
        logo: logo4,
        company: "medicon",
        covering: "Health",
        type: "ppo",
        metal: metals.catastrophic,
        drugs: "$20",
        primaryCareVisits: "40%",
        yearlyDeductible: 6000,
        price: 300
    },
    {
        logo: logo2,
        company: "health ins",
        covering: "Dental",
        type: "pos",
        metal: metals.platinum,
        drugs: "$15",
        primaryCareVisits: "$75",
        yearlyDeductible: 5000,
        price: 234
    },
    {
        logo: logo1,
        company: "insurcom",
        covering: "Health",
        type: "hmo",
        metal: metals.gold,
        drugs: "100%",
        primaryCareVisits: "$45",
        yearlyDeductible: 4500,
        price: 366
    },
    {
        logo: logo4,
        company: "medicon",
        covering: "All-in-one",
        type: "epo",
        metal: metals.catastrophic,
        drugs: "$15",
        primaryCareVisits: "50%",
        yearlyDeductible: 2600,
        price: 371
    }


];
