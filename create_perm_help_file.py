#create_permi_help_file.py
import json

usedByDEV = input('Used By Devs? [true/false] ').lower()
usedInDMs = input('Used in Dms? [true/false] ').lower()
Name = input('Command name? ')
Usage = input('Command usage? ')
Example = input('Command Example? ')
Type = input('Command type? [Dev/Fun/Mod/Unk]')

Settings ={
    "usedDMs" : usedInDMs,
    "UsedDevs": usedByDEV,

    "Name": Name,
    "Usage": Usage,
    "Example" : Example,

    "Type": Type
}
  
Settings_in_Json = json.dumps(Settings, indent = 4)
  
# Writing to our file the settings given above.
with open(f"./Command_perm/{Name.lower()}.json", "w") as resulting_file:
    resulting_file.write(Settings_in_Json)