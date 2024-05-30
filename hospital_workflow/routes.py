from flask import render_template, url_for, flash, redirect, request
from app import app, db, bcrypt
from models import User, Patient, Resource
from forms import RegistrationForm, LoginForm, PatientForm, ResourceForm
from flask_login import login_user, current_user, logout_user, login_required

# Create tables directly in the script
with app.app_context():
    db.create_all()

@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            return redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Login', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('registration.html', title='Register', form=form)

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html', title='Dashboard')

@app.route('/patient_data', methods=['GET', 'POST'])
@login_required
def patient_data():
    form = PatientForm()
    if form.validate_on_submit():
        patient = Patient(name=form.name.data, age=form.age.data, gender=form.gender.data, condition=form.condition.data, author=current_user)
        db.session.add(patient)
        db.session.commit()
        flash('Patient added!', 'success')
        return redirect(url_for('patient_data'))
    patients = Patient.query.filter_by(author=current_user)
    return render_template('patient_data.html', title='Patient Data', form=form, patients=patients)

@app.route('/resource_management', methods=['GET', 'POST'])
@login_required
def resource_management():
    form = ResourceForm()
    if form.validate_on_submit():
        resource = Resource(name=form.name.data, type=form.type.data, quantity=form.quantity.data)
        db.session.add(resource)
        db.session.commit()
        flash('Resource added!', 'success')
        return redirect(url_for('resource_management'))
    resources = Resource.query.all()
    return render_template('resource_management.html', title='Resource Management', form=form, resources=resources)

# Add routes for simulation control and results & reports as needed
