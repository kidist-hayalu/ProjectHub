import factory
from core.models import Project, Task
from .team_factory import TeamFactory
from .user_factory import UserFactory
from faker import Faker
import random
from datetime import timedelta

fake = Faker()

class ProjectFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Project

    project_name = factory.Faker('bs')
    description = factory.Faker('sentence')
    status = factory.Iterator(['planning', 'active', 'completed', 'on hold'])
    start_date = factory.Faker('past_datetime')
    deadline = factory.Faker('future_datetime')
    created_by = factory.SubFactory(UserFactory)
    team = factory.SubFactory(TeamFactory)

    @factory.post_generation
    def tasks(self, create, extracted, **kwargs):
        if not create:
            return
        
        team_members = self.team.members.all()

        if not team_members:
            return
        
        for _ in range(random.randint(3, 6)):
            Task.objects.create(
                name=fake.sentence(),
                description=fake.paragraph(),
                project=self,
                completed=random.choice([True, False]),
                status=random.choice(['Pending', 'In Progress', 'Done']),
                priority=random.choice(['low', 'medium', 'high']),
                due_date=fake.future_datetime(end_date="+30d"),
                assigned_to=random.choice(team_members),
            )