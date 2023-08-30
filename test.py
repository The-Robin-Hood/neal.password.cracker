import random
import datetime
import requests
import ephem

def get_moon_phase():
    date = datetime.date.today()
    moon = ephem.Moon()
    moon.compute(date)
    return int(moon.moon_phase * 100)

moon_phase_emojis = {
    0: '🌑 New Moon',
    1: '🌒 Waxing Crescent',
    2: '🌓 First Quarter',
    3: '🌔 Waxing Gibbous',
    4: '🌕 Full Moon',
    5: '🌖 Waning Gibbous',
    6: '🌗 Third Quarter',
    7: '🌘 Waning Crescent',
}


# Requirement 10: Captcha from the given URL
captcha_url = "https://neal.fun/password-game/captchas"
captcha_response = requests.get(captcha_url)
captcha = captcha_response.text.strip()

# Requirement 11: Wordle answer from the given URL
wordle_url = "https://neal.fun/api/password-game/wordle?date=2023-08-29"
wordle_response = requests.get(wordle_url)
wordle_answer = wordle_response.json()["answer"]

# Requirement 17: Chicken name
chicken_name = "🥚"

# Requirement 22: Positive affirmations
affirmations = ["i am loved", "i am worthy", "i am enough"]

# Get the current date
current_date = datetime.datetime.now()

# Requirement 23: Chicken feeding condition
def chicken_feeding_condition(e):
    return not e or len(e) >= 9

# Generate password components
number = random.randint(0, 9)
uppercase_letter = random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
special_char = random.choice('!@#$%^&*()_+[]{}|;:,.<>?')
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
month = random.choice(months)
roman_numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
roman_numeral = random.choice(roman_numerals)
sponsor = random.choice(['PEPSI', 'STARBUCKS', 'SHELL'])
elements = [
    {"symbol": "H", "atomic_number": 1}, {"symbol": "He", "atomic_number": 2}, {"symbol": "Li", "atomic_number": 3},
    {"symbol": "Be", "atomic_number": 4}, {"symbol": "B", "atomic_number": 5}, {"symbol": "C", "atomic_number": 6},
    {"symbol": "N", "atomic_number": 7}, {"symbol": "O", "atomic_number": 8}, {"symbol": "F", "atomic_number": 9},
    {"symbol": "Ne", "atomic_number": 10}, {"symbol": "Na", "atomic_number": 11}, {"symbol": "Mg", "atomic_number": 12},
    {"symbol": "Al", "atomic_number": 13}, {"symbol": "Si", "atomic_number": 14}, {"symbol": "P", "atomic_number": 15},
    {"symbol": "S", "atomic_number": 16}, {"symbol": "Cl", "atomic_number": 17}, {"symbol": "Ar", "atomic_number": 18},
    {"symbol": "K", "atomic_number": 19}, {"symbol": "Ca", "atomic_number": 20}, {"symbol": "Sc", "atomic_number": 21},
    {"symbol": "Ti", "atomic_number": 22}, {"symbol": "V", "atomic_number": 23}, {"symbol": "Cr", "atomic_number": 24},
    {"symbol": "Mn", "atomic_number": 25}, {"symbol": "Fe", "atomic_number": 26}, {"symbol": "Co", "atomic_number": 27}, 
    {"symbol": "Ni", "atomic_number": 28}, {"symbol": "Cu", "atomic_number": 29}, {"symbol": "Zn", "atomic_number": 30},
    {"symbol": "Ga", "atomic_number": 31}, {"symbol": "Ge", "atomic_number": 32}, {"symbol": "As", "atomic_number": 33},
    {"symbol": "Se", "atomic_number": 34}, {"symbol": "Br", "atomic_number": 35}, {"symbol": "Kr", "atomic_number": 36},
    {"symbol": "Rb", "atomic_number": 37}, {"symbol": "Sr", "atomic_number": 38}, {"symbol": "Y", "atomic_number": 39},
    {"symbol": "Zr", "atomic_number": 40}, {"symbol": "Nb", "atomic_number": 41}, {"symbol": "Mo", "atomic_number": 42},
    {"symbol": "Tc", "atomic_number": 43}, {"symbol": "Ru", "atomic_number": 44}, {"symbol": "Rh", "atomic_number": 45},
    {"symbol": "Pd", "atomic_number": 46}, {"symbol": "Ag", "atomic_number": 47}, {"symbol": "Cd", "atomic_number": 48},
    {"symbol": "In", "atomic_number": 49}, {"symbol": "Sn", "atomic_number": 50}, {"symbol": "Sb", "atomic_number": 51},
    {"symbol": "Te", "atomic_number": 52}, {"symbol": "I", "atomic_number": 53}, {"symbol": "Xe", "atomic_number": 54},
    {"symbol": "Cs", "atomic_number": 55}, {"symbol": "Ba", "atomic_number": 56}, {"symbol": "La", "atomic_number": 57},
    {"symbol": "Ce", "atomic_number": 58}, {"symbol": "Pr", "atomic_number": 59}, {"symbol": "Nd", "atomic_number": 60},
    {"symbol": "Pm", "atomic_number": 61}, {"symbol": "Sm", "atomic_number": 62}, {"symbol": "Eu", "atomic_number": 63},
    {"symbol": "Gd", "atomic_number": 64}, {"symbol": "Tb", "atomic_number": 65}, {"symbol": "Dy", "atomic_number": 66},
    {"symbol": "Ho", "atomic_number": 67}, {"symbol": "Er", "atomic_number": 68}, {"symbol": "Tm", "atomic_number": 69},
    {"symbol": "Yb", "atomic_number": 70}, {"symbol": "Lu", "atomic_number": 71}, {"symbol": "Hf", "atomic_number": 72},
    {"symbol": "Ta", "atomic_number": 73}, {"symbol": "W", "atomic_number": 74}, {"symbol": "Re", "atomic_number": 75},
    {"symbol": "Os", "atomic_number": 76}, {"symbol": "Ir", "atomic_number": 77}, {"symbol": "Pt", "atomic_number": 78},
    {"symbol": "Au", "atomic_number": 79}, {"symbol": "Hg", "atomic_number": 80}, {"symbol": "Tl", "atomic_number": 81},
    {"symbol": "Pb", "atomic_number": 82}, {"symbol": "Bi", "atomic_number": 83}, {"symbol": "Po", "atomic_number": 84},
    {"symbol": "At", "atomic_number": 85}, {"symbol": "Rn", "atomic_number": 86}, {"symbol": "Fr", "atomic_number": 87},
    {"symbol": "Ra", "atomic_number": 88}, {"symbol": "Ac", "atomic_number": 89}, {"symbol": "Th", "atomic_number": 90},
    {"symbol": "Pa", "atomic_number": 91}, {"symbol": "U", "atomic_number": 92}, {"symbol": "Np", "atomic_number": 93},
    {"symbol": "Pu", "atomic_number": 94}, {"symbol": "Am", "atomic_number": 95}, {"symbol": "Cm", "atomic_number": 96},
    {"symbol": "Bk", "atomic_number": 97}, {"symbol": "Cf", "atomic_number": 98}, {"symbol": "Es", "atomic_number": 99},
    {"symbol": "Fm", "atomic_number": 100}, {"symbol": "Md", "atomic_number": 101}, {"symbol": "No", "atomic_number": 102},
    {"symbol": "Lr", "atomic_number": 103}, {"symbol": "Rf", "atomic_number": 104}, {"symbol": "Db", "atomic_number": 105},
    {"symbol": "Sg", "atomic_number": 106}, {"symbol": "Bh", "atomic_number": 107}, {"symbol": "Hs", "atomic_number": 108},
    {"symbol": "Mt", "atomic_number": 109}, {"symbol": "Ds", "atomic_number": 110}, {"symbol": "Rg", "atomic_number": 111},
    {"symbol": "Cn", "atomic_number": 112}, {"symbol": "Nh", "atomic_number": 113}, {"symbol": "Fl", "atomic_number": 114},
    {"symbol": "Mc", "atomic_number": 115}, {"symbol": "Lv", "atomic_number": 116}, {"symbol": "Ts", "atomic_number": 117},
    {"symbol": "Og", "atomic_number": 118}
]
leap_year = random.choice([year for year in range(current_date.year, current_date.year + 5) if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)])
# Get the current moon phase
moon_phase = get_moon_phase() % 8
moon_phase = moon_phase_emojis[moon_phase]
country = "CountryName"  # Replace with the actual name of the country
unusable_letters = random.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 2)
italic_chars = ['a', 'e', 'i', 'o', 'u']
bold_vowels = [f"**{char}**" if char in italic_chars else char for char in country]
font_sizes = [1, 4, 9, 16, 25, 36, 49, 64, 81]

# Concatenate all the password components
password = (
    f"{number}{uppercase_letter}{special_char}{month}{roman_numeral}{sponsor}"
    f"{roman_numeral}{captcha}{wordle_answer}{elements[0]['symbol']}{moon_phase}"
    f"{country}{leap_year}{chicken_name}{elements[1]['symbol']}"
)
print(password)

# Requirement 18: Elements' atomic numbers sum to 200
remaining_sum = 200 - (elements[0]['atomic_number'] + elements[1]['atomic_number'])
if remaining_sum >= 1:
    password += random.choice([element['symbol'] for element in elements[2:] if element['atomic_number'] <= remaining_sum])

# Requirement 19: Bold vowels
password = ''.join(bold_vowels) + password[len(bold_vowels):]

# Requirement 21: Password strength check
if len(password) < 3:
    raise ValueError("Password is not strong enough.")

# Requirement 23: Chicken feeding check
# if not chicken_feeding_condition(chicken_name):
#     raise ValueError("Paul the chicken is hungry!")

# Requirement 25: Removing unusable letters
for letter in unusable_letters:
    password = password.replace(letter, '')

# Requirement 26: Equal italic and bold character count
italic_count = password.count('*')
italic_chars_to_add = random.choices(italic_chars, k=italic_count)
password = password.replace('*', '') + ''.join(italic_chars_to_add)

# Requirement 32: Include password length
password = str(len(password)) + password

# Print the generated password
print(password)
