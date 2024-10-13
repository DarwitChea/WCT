*
{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

Header Section
header
{
    width: 100%;
    height: 100px;
    background-color: #323f4f;
    justify-content: space-between;
    display: flex;
    text-align: center;
    align-items: center;
}

header h1
{
    color: white;
    margin-left: 10%;
}

.nav
{
    list-style-type: none;
    margin-right: 10%;
    padding: 0;

    color: white;
    font-weight: bold;
    text-decoration: none;
}

.nav ul
{
    list-style-type: none;
    overflow: hidden;
}

.nav li
{
    margin-right: 50px;
    text-decoration: none;

    float: left;
}

.nav a
{
    display: block;
}

.nav ul li a
{
    text-decoration: none;
    color: white;
}

Middle Section
section
{
    width: 100%;
    height: 750px;
    background-color: #57ba9d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
}

section img
{
    max-width: 40%;
    max-height: 40%;
    border-radius: 50%;
}

section h1
{
    font-size: 70px;
    padding: 0.5em 0 0.5em 0;
}

.starbox-container
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    height: auto;
    width: 400px;

    padding-bottom: 2%;
}

.line
{
    width: 40%;
    height: 5px;
    background-color: white;
    border-radius: 3px;
}

section p
{
    font-size: 20px;
}
