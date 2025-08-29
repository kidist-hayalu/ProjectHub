import factory
from django.contrib.auth import get_user_model
from faker import Faker


fake = Faker()
user = get_user_model()

class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = user

    username = factory.LazyAttribute(lambda _: fake.user_name())
    email = factory.LazyAttribute(lambda _: fake.email())
    password = factory.PostGenerationMethodCall('set_password', 'password123')