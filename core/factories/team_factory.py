import factory
from core.models import Team
from .user_factory import UserFactory
from django.contrib.auth import get_user_model

class TeamFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Team

    name  = factory.Faker('company')
    created_by = factory.SubFactory(UserFactory)
    
    @factory.post_generation
    def members(self, create, extracted, **kwargs):
        if not create:
            return
        
        if extracted:
            for members in extracted:
                self.members.add(members)
        else:
            User = get_user_model()
            users = User.objects.exclude(is_superuser=True)
            self.members.add(*users.order_by('?')[:3])

