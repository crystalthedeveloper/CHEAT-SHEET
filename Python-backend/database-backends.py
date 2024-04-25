# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

#
# Database
#

# Install MySQL Client:
# ~$ pipenv install mysqlclient 
# ~$ pip3 install mysqlclient
# ~$ pip3 install pymysql

# Installs psycopg2-binary, which is a PostgreSQL adapter for Python. The version number 2.10.0
# ~$ pipenv install psycopg2-binary==2.10.0

# sqlite3
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# MySQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydatabase',
        'USER': 'mydatabaseuser',
        'PASSWORD': 'mypassword',
        'HOST': '127.0.0.1',  # Set to the MySQL server host
        'PORT': '3306',       # Set to the MySQL server port
        'OPTIONS':{
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
            } 
    }
}

# PostgreSQL
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "mydatabase",
        "USER": "mydatabaseuser",
        "PASSWORD": "mypassword",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}